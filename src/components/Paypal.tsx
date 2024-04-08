import React, { useState, useEffect, useMemo, useCallback } from "react";
import swal from "sweetalert";
import axios from "axios";
import { OnApproveBraintreeActions, OnApproveBraintreeData } from "@paypal/react-paypal-js";

interface PaypalProps {
  id: number;
  pageData: Record<string, string>;
}

const Paypal: React.FC<PaypalProps> = (props) => {
  const { pageData } = props;

  const url = useMemo(() => {
    if (import.meta.env.REACT_APP_ENVIRONMENT === "development")
      return "http://localhost:5000/api/seaburial_paypal";
    return "https://nearfall-paypal.herokuapp.com/api/seaburial_paypal";
  }, [import.meta.env.REACT_APP_ENVIRONMENT]);

  const baseUrl = useMemo(() => {
    if (import.meta.env.REACT_APP_ENVIRONMENT === "development")
      return "http://localhost:5000";
    return "https://nearfall-paypal.herokuapp.com";
  }, [import.meta.env.REACT_APP_ENVIRONMENT]);

  useEffect(() => {
    (window as any).paypal
      .Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: () => {
          return axios
            .post(url, {
              id: props.id,
            })
            .then((res) => {
              return res.data.payload;
            })
            .catch((e) => {
              console.error(e.error);
            });
        },
        // Finalize the transaction after payer approval
        onApprove: (data: OnApproveBraintreeData, actions: OnApproveBraintreeActions) => {
          console.log(data)
          return actions.order?.capture().then(function (orderData: any) {
            // Successful capture! For dev/demo purposes:
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            alert(
              `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
            );
            axios.post(
              `${baseUrl}/api/formData`,
              {
                ...pageData,
              }
            );
          });
        },
      })
      .render("#paypal-button-container");
  });

  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handlePolicyAccept = useCallback((e: any) => {
    e.preventDefault();
    if (!pageData.name || !pageData.email || !pageData.phone || !pageData.attendees) return swal('Error', 'You forgot to enter something!', 'error');
    if (!pageData.scheduledDate) return swal('Error', 'You forgot to select a date!', 'error');
    const link = document.createElement("a");
    link.innerHTML = "Boat Policy";
    link.setAttribute(
      "href",
      "https://www.nearfallfishingcharters.com/policies"
    );
    swal("", `Please confirm that you have reviewed our`, "info", {
      buttons: ["Cancel", "Confirm"],
      content: link as any,
    }).then(async (confirm) => {
      if (confirm) {
        setAcceptPolicy(true);
      }
    });
  }, [pageData]);

  if (acceptPolicy) {
    return (
      <div>
        <div id="paypal-button-container"></div>
      </div>
    );
  }
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={handlePolicyAccept}>
      View/Accept policy
    </button>
  );
};

export default Paypal;
