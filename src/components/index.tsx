
export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="about" className="w-full py-12 px-20 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 flex flex-col">
            <div className="flex items-center justify-center">
              <div>
                <img src="/assets/decorator.png" />
              </div>
              <h2 className="text-3xl font-bold text-black crimson-text-regular tracking-tighter text-left  sm:text-4xl md:text-5xl">
                About Our Sea Burials
              </h2>
              <div className="w-[1000px] h-[1px] bg-black ml-10" />
            </div>

            <div className="flex flex-row-reverse w-full items-center justify-between gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] h-[600px]">
              <div className="">
                <img
                  alt="Image"
                  className="mx-auto aspect-video my-3 h-[800px] w-auto overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
                  src="/about_us_img.png"
                />
              </div>
              <div className="flex flex-col justify-center items-start space-y-4 text-black">
                <div className="space-y-2 poppins-regular">
                  <p className="min-w-[500px] max-w-[600px] text-left text-sm text-black">
                    Our sea memorial service offers families a profoundly unique
                    and deeply personal alternative for laying their loved ones
                    to rest. We understand that every individual is unique, and
                    their final farewell should reflect the essence of their
                    life. Our service allows families to craft a truly special
                    and customized ceremony, transforming the act of scattering
                    ashes into a deeply meaningful experience. Unlike
                    traditional funerals, our sea memorial service is entirely
                    private, providing an intimate setting where families can
                    gather for a final farewell. This exclusivity ensures that
                    the ceremony becomes a sacred and personal moment, allowing
                    for genuine connections and shared memories. The vastness of
                    the ocean serves as the perfect backdrop, enhancing the
                    spiritual and emotional aspects of the farewell.
                  </p>
                  <p className="max-w-[600px] text-sm text-left text-black">
                    Our commitment to customization means that families have the
                    freedom to design the ceremony in a way that resonates with
                    their cherished memories and the personality of their
                    departed loved one. Every detail can be tailored to create a
                    truly unique and special sea burial experience. We recognize
                    the importance of providing families with the opportunity to
                    express their grief in a way that feels authentic and
                    meaningful to them. The ceremony becomes a celebration of
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
        <section className="bg-[#BEECFF] w-full min-h-[256px] relative flex items-center justify-center">
          <div className="absolute h-full w-full top-0 left-0">
            <img src='/flower_overlay.png' />
          </div>
          <div className="max-w-[800px] crimson-text-regular text-slate-500 text-2xl">
            <span>
              “My comfort will come from the sea. <br></br> The stillness of calm waves will gently drift by. <br></br> I will be as one with the sea. <br></br>When the sun sets on the ocean blue, remember me as I will always remember you. <br></br>As the sun rises…go live life as full as can be<br></br>Apart…you and me…but be at peace for I am free.”
              <br></br>-Capt Chad Theesfeld
            </span>
          </div>

        </section>
        <section className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Testimonials
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
                <p className="text-gray-500 dark:text-gray-400 italic">
                  "Experiencing NJ Sea Memorial’s sea burial was beyond our
                  expectations. The Dauntless provided a comfortable and serene
                  setting for our family and friends. Saying our final goodbyes
                  with the ocean and sunset in the background was breathtaking.
                  Highly recommend this service."
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">
                  - Jessica M. - Point Pleasant Beach, NJ
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
                <p className="text-gray-500 dark:text-gray-400 italic">
                  "We chose NJ Sea Memorial Service for my father's sea burial,
                  and it was a decision we'll always be grateful for. The
                  Nearfall was perfect for my small family and the entire
                  experience was carefully crafted and Captain Joe was
                  incredibly flexible with our requests. I can't recommend NJ
                  Sea Memorial service enough"
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">
                  - David P. - Belmar, NJ
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
                <p className="text-gray-500 dark:text-gray-400 italic">
                  "An amazing experience aboard the Dauntless. I had never been
                  a part of an ash scattering before and NJ Sea Memorial service
                  made it so easy for me. Highly recommended for families
                  seeking an alternative and heartfelt way to say their final
                  goodbyes."
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">
                  - Rebecca K. - Manahawkin, NJ
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#BEECFF] text-black">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 m-auto">
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="scale-[0.75]">
                  <img src="/assets/decorator.png" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight uppercase crimson-text-regular text-[#0077C0]">
                  Contact Us
                </h2>
                <div className="w-[1000px] h-[1px] bg-[#0077C0] ml-10" />
              </div>


            </div>
            <div className="flex items-center justify-center space-x-20 m-auto">
              <div className="flex flex-col w-full space-y-2">
                <div className="font-bold text-xl underline crimson-text-regular">Nearfall</div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2742434934494!2d-74.03153538469961!3d40.18070987939312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227e202c1271f%3A0xc8b2beb9c0d03d94!2s905%20NJ-35%2C%20Belmar%2C%20NJ%2007719!5e0!3m2!1sen!2sus!4v1646195218368!5m2!1sen!2sus"
                  width="600"
                  height="400"
                ></iframe>
              </div>
              <div className="w-full space-y-2 flex flex-col">
                <div className="font-bold text-xl underline crimson-text-regular">Dauntless</div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8526634636078!2d-74.04234640955569!3d40.1009977979869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c185e3e22805ab%3A0x251d3ede964e74af!2sDauntless%20Sport%20Fishing!5e0!3m2!1sen!2sus!4v1705550874283!5m2!1sen!2sus"
                  width="600"
                  height="400"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-full flex flex-col mt-10 justify-center items-center">
              <form className=" min-w-[774px] space-y-4">
                <div className="space-y-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone-number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    className="flex w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
