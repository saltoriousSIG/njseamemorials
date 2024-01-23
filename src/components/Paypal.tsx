import React, { useState, useEffect, useMemo, useCallback } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import swal from "sweetalert";
import axios from "axios";

interface PaypalProps {
  id: string;
  pageData: any;
}

const Paypal: React.FC<PaypalProps> = (props) => {
  const { pageData } = props;

  const url = useMemo(() => {
    if (import.meta.env.REACT_APP_ENVIRONMENT === "development")
      return "http://localhost:5000/api/paypal";
    return "https://nearfall-paypal.herokuapp.com/api/paypal";
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
        onApprove:  (data: any, actions: any) => {
          console.log(data)
          return actions.order.capture().then(function (orderData: any) {
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

            // When ready to go live, remove the alert and show a success message within this page. For example:
            // const element = document.getElementById('paypal-button-container');
            // element.innerHTML = '<h3>Thank you for your payment!</h3>';
            // Or go to another URL:  actions.redirect('thank_you.html');
          });
        },
      })
      .render("#paypal-button-container");
  });

  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handlePolicyAccept = useCallback((e: any) => {
    e.preventDefault();
    if (!pageData.name || !pageData.email || !pageData.phone) return swal('Error', 'You forgot to enter something!', 'error');
    if (!pageData.scheduledDate) return swal ('Error', 'You forgot to select a date!', 'error');
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
      //   <PayPalScriptProvider
      //     options={{
      //       "client-id":
      //         "AUgmJJNkO3cRmnWl2gHs-Fho4sAOEPgIH2PXW2HQKaVDRpEZUZdciclNiAq-ip9MGmAQM2RCnbFPkiwI",
      //       components: "buttons",
      //       currency: "USD",
      //     }}
      //   >

      //     <PayPalButtons
      //       createOrder={(data, actions) => {
      //         axios
      //           .post(url, {
      //             items: [{ id: props.id }],
      //           })
      //           .then((response) => console.log(response))
      //           .catch((err) => console.log(err));

      //         return actions.order.create({
      //           purchase_units: [
      //             {
      //               amount: {
      //                 value: 1,
      //               },
      //             },
      //           ],
      //         });
      //       }}
      //       onApprove={(data, actions) => {
      //         return actions.order.capture().then((details) => {
      //           const name = details.payer.name.given_name;
      //           alert(`Transaction completed by ${name}`);
      //         });
      //       }}
      //     />
      //   </PayPalScriptProvider>

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
