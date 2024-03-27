import React from "react";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-8 text-black">
        {/* FAQ Item 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Where do I Begin?</h2>
          <p>
            We first want to make sure we have what you are looking for. We
            recommend reviewing our entire website. Additionally, you may call
            732-232-5620 or 732-892-4298 for any additional info. Bookings may
            be done online or over the phone.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            How much time do I have to book prior to the event?
          </h2>
          <p>
            We often have the ability to take you out within 24 hours notice as
            long as there are reservations available on one of our vessels for
            the time you are looking for. With that being said, if you need to
            make arrangements with family, flowers or food, you will likely want
            to give yourself more time to prepare.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            How Long Does A trip take?
          </h2>
          <p>
            Generally, a sea burial takes about an hour. You will have up to 90
            minutes from the beginning of the trip with up to 45 minutes at your
            disposal to say any prayers or partake in any ceremonies at the
            ‘Burial ground’.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Can we perform a religious ceremony?
          </h2>
          <p>
            Yes. On many of the sea burials, members of religious clergy
            accompany our clients. Clergy members are chosen by the family and
            the family is responsible for finding and employing the officiant.
            We welcome ALL religious denominations.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Do I have to attend the sea burial if I am not used to the ocean or
            don't live nearby?
          </h2>
          <p>
            You do not need to attend the sea burial. You are welcome to partake
            in an “unattended” sea burial, where the captain will spread the
            ashes for you. You may deliver the cremains directly to our office
            via the postal service or in person. We ask that if you request an
            unattended sea burial, please contact 732-232-5620 to coordinate the
            location of delivery.
          </p>
        </div>

        {/* FAQ Item 6 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Do I need a permit for scattering ashes?
          </h2>
          <p>
            You are not responsible for obtaining any permit for your sea
            burial. Our vessels have a general permit from the EPA for
            proceeding with ash scatterings in the ocean. Additionally, within
            30 days of the burial, we are required to report it. None of this is
            your responsibility.
          </p>
        </div>

        {/* FAQ Item 7 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Do we have to bring flowers and do you have any suggestions?
          </h2>
          <p>
            You do not have to bring flowers, but we have noticed on most trips,
            families and friends bring flowers. It certainly adds a beautiful
            touch to the ceremony. Friends and family who are unable to attend
            often send in flowers as well. Typically, the flowers and the ashes
            are spread together in the ocean.
          </p>
          <p>
            For beautiful options for funeral options,{" "}
            <a
              href="https://www.800florals.com/category.asp?category=wf&ID=@AF1"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              follow this link
            </a>
            .
          </p>
        </div>

        {/* FAQ Item 8 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Can we bring food and alcohol?
          </h2>
          <p>
            beverages. Please only drink alcohol if you are 21 years or older.
            If you are having food catered, we recommend you have it delivered
            to you directly and then you bring it to the ceremony. We will help
            get everything set up on board.
          </p>
        </div>

        {/* FAQ Item 9 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">How should we dress?</h2>
          <p>
            Generally, most people are dressing in semi-formal attire, however,
            this is entirely up to you and your attendees. Some cultures have
            traditional wear for funerals. We have also seen people dress very
            casually for the occasion. We recommend dressing in layers. The
            ocean at any time of the year is always slightly cooler than
            expected.
          </p>
        </div>

        {/* FAQ Item 10 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Do we receive any documentation regarding the burial?
          </h2>
          <p>
            Yes. In the following days after the ceremony, we will send a signed
            certification document with all necessary information regarding the
            interment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
