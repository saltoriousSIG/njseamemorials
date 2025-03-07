import Carousel from "./Carousel";

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section
          id="about"
          className="w-full lg:py-12 lg:px-20 py-10 px-8 bg-white"
        >
          <div className="container px-4 md:px-6 flex flex-col">
            <div className="flex items-center justify-center">
              <div>
                <img src="/assets/decorator.png" />
              </div>
              <h2 className="text-xl whitespace-nowrap lg:text-3xl font-bold text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
                About Our Sea Burials
              </h2>
              <div className="lg:w-[1000px] h-[1px] bg-black ml-10" />
            </div>

            <div className="flex flex-row-reverse w-full items-center justify-between lg:gap-6 m-auto lg:ml-24  lg:h-[600px]">
              <div className="w-1/2 hidden lg:flex">
                <img
                  alt="Image"
                  className="mx-auto aspect-video my-3 h-[800px] w-auto overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
                  src="/about_us_img.png"
                />
              </div>
              <div className="flex flex-col justify-center items-start space-y-4 text-black w-full m-auto lg:w-1/2">
                <div className="space-y-2 poppins-regular text-lg">
                  <p className="min-w-[500px] max-w-[600px] text-left  text-black">
                    New Jersey Sea Memorials offers families a unique and
                    personal alternative for laying loved ones to rest. Our
                    service allows families to craft a special and customized
                    ceremony, transforming the act of scattering ashes into a
                    meaningful experience. Unlike traditional funerals, a sea
                    memorial service is entirely private, providing an intimate
                    setting where families can gather for a final farewell. We
                    can accommodate unattended burials for families who are out
                    of state or unable to comfortably be out at sea, and can
                    also hold gatherings for groups of any size.
                  </p>
                  <p className="max-w-[600px] text-left text-black">
                    Our commitment to customization means that families have the
                    freedom to design the ceremony. This can include your loved
                    ones’ favorite food, pictures, flowers, and music. Every
                    detail can be tailored to create a truly unique and special
                    sea burial experience. The ceremony becomes a celebration of
                    life, love, and the enduring connection shared with the
                    departed. In this private and personalized setting, families
                    can find solace and comfort making the sea memorial service
                    a profoundly special and healing experience during a
                    challenging time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#BEECFF] w-full min-h-[290px] relative flex items-center justify-center">
          <div className="absolute h-full w-full top-0 left-0">
            <img src="/flower_overlay.png" />
          </div>
          <div className="max-w-[800px] crimson-text-regular text-slate-500 text-2xl">
            <span>
              “My comfort will come from the sea. <br></br> The stillness of
              calm waves will gently drift by. <br></br> I will be as one with
              the sea. <br></br>When the sun sets on the ocean blue, remember me
              as I will always remember you. <br></br>As the sun rises…go live
              life as full as can be<br></br>Apart…you and me…but be at peace
              for I am free.”
              <br></br>-Capt Chad Theesfeld
            </span>
          </div>
        </section>
        <section className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Carousel />
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#BEECFF] text-black"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 m-auto">
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="scale-[0.75]">
                  <img src="/assets/decorator.png" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight uppercase crimson-text-regular text-[#0077C0] whitespace-nowrap">
                  Locations 
                </h2>
                <div className=" lg:w-[1000px] h-[1px] bg-[#0077C0] ml-10" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-20 m-auto w-full">
              <div className="flex flex-col w-full space-y-2">
                <div className="font-bold text-3xl underline crimson-text-regular">
                  Nearfall
                </div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2742434934494!2d-74.03153538469961!3d40.18070987939312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227e202c1271f%3A0xc8b2beb9c0d03d94!2s905%20NJ-35%2C%20Belmar%2C%20NJ%2007719!5e0!3m2!1sen!2sus!4v1646195218368!5m2!1sen!2sus"
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
              <div className="w-full space-y-2 flex flex-col">
                <div className="font-bold text-3xl underline crimson-text-regular">
                  Dauntless
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8526634636078!2d-74.04234640955569!3d40.1009977979869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c185e3e22805ab%3A0x251d3ede964e74af!2sDauntless%20Sport%20Fishing!5e0!3m2!1sen!2sus!4v1705550874283!5m2!1sen!2sus"
                  width="100%"
                  height="500px"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
