import React from "react";

interface PoliciesProps { }

const Policies: React.FC<PoliciesProps> = () => {
  return (
    <div className="space-y-6 text-black text-left mt-0 mb-10">
      <section className="rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">
          Trip Deposit/Balances
        </h2>
        <p className="mb-2 font-bold">
          A 30% deposit is required for all ATTENDED sea burials. UNATTENDED sea burials will be paid in full at time of booking.
        </p>
        <p className="mb-2">
          Deposits are to be paid on the day of booking via NJSEAMEMORIALS.com.
        </p>
        <p className="mb-2">
          When making a deposit online, you will book your selected date and submit the payment. There may be a delay in updating the calendar and on rare occasions, there may be a double booking. In the event a double booking occurs, the trip will go to the charter who booked first and the second booking party will be called to reschedule.
        </p>
        <p className="mb-2">
          On the rare occasion a check must be given as a deposit, it will be accepted as long as it is prior to 30 days of your trip.
        </p>
        <p className="mb-2">
          Deposits Are NON-Refundable.
          There will be a 3.5% service fee for PayPal upon deposit.
        </p>
        <p className="mb-2">
          If a reschedule is needed within 30 days of the booked trip, we will gladly change the date. If the trip is canceled due to weather or unforeseen circumstances, the deposit will be applied to the next agreed upon date for the burial ceremony.
        </p>
        <p className="mb-2">
          Deposits not used in the year of booking are good for one calendar year following the original booking. After one year, the deposit will be forfeited.
        </p>
        <p className="mb-2 font-bold">
          Balances are to be paid in CASH on the day of the trip and handed directly to the captain.
        </p>
        <p className="">
          On the rare occasion paying in cash is not an option, Venmo or PayPal may be used. A 3.5% surcharge will be added for all electronic money transfers.
        </p>
      </section>

      <section className="rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-3">Gratuity</h2>
        <p className="">
          Although it is not mandatory, gratuity is customary on all in-person
          sea burials and NOT included in the ceremony cost. The crew provides a
          service and puts great effort into making your burial ceremony
          special. On most occasions, people tip the crew 15-20%.
        </p>
        {/* Tip examples can be displayed as a list or table */}
        <ul className="list-disc pl-5">
          <li className="list-none">$650 trip cost: $100-130</li>
          <li className="list-none">$800 trip cost: $120-160</li>
          <li className="list-none">$1000 trip cost: $150-200</li>
          <li className="list-none">$1200 trip cost: $180-240</li>
        </ul>
      </section>

      <section className="rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-3">
          Charter Cancellations and Weather
        </h2>
        <p className="">
          Safety is our number one concern and we will be constantly monitoring
          weather up to the day of the trip. The trip’s Captain will review the
          forecast and the office will confirm all trips no later than 12 hours
          prior to departure. If the weather is questionable for your ceremony,
          the final call will be made the evening before the trip by 6pm. The
          person who booked the trip is responsible for letting the remainder of
          their group know about weather decisions.
        </p>
        <p className="">
          Cancellation of any Ceremony is the decision of our Captain, not the
          customer. Cancellations due to weather will be rescheduled to a later
          date agreeable by both the captain and the person who booked the
          burial.
        </p>
      </section>

      <section className="rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-3">What to Bring</h2>
        <ul className="list-disc pl-5">
          <li className="list-none mb-2">
            You are permitted to bring your own food and beverages, and we advise smaller coolers for carry-on.
          </li>
          <li className="list-none mb-2">
            For food, we advise pre-packaged meals and sandwiches. You are welcome to have your ceremony catered. **The catering needs to be punctual due to the likelihood of other trips being booked before and/or after your ceremony.
          </li>
          <li className="list-none mb-2">
            Flowers, special items for your sea burial, and clergymen of all faiths are all welcome aboard.
          </li>
          <li className="list-none mb-2">
            Items to be placed in the water should not include plastic and oil products.
          </li>
          <li className="list-none mb-2">
            Excessive drinking is not permitted.
          </li>
          <li className="list-none mb-2">
            Always dress appropriately for the seasonal conditions; evenings are cooler than you expect. We advise you to dress in layers.
          </li>
          <li className="list-none mb-2">
            Children 12 and under must wear a life jacket (USCG regulation).
          </li>
          <li className="list-none mb-2">
            If you are prone to motion sickness, please take medication before the trip. Follow the manufacturers’ directions to ensure proper dosage prior to travel. Examples include Scopolamine, Dramamine, and Bonine.
          </li>

        </ul>
      </section>
    </div>
  );
};

export default Policies;
