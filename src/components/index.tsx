export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header>
        <nav className="flex w-full justify-end">
          <div className="mx-2">732-232-5620</div>
          <div className="mx-2">732-892-4298</div>
        </nav>
      </header>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">NJ Sea Burials</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Experiences
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Why A Sea Burial
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Prices
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Calendar
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 h-[100vh] bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute h-full w-full top-0 left-0 bg-black z-[3] opacity-80" />
          <div className="relative container px-4 md:px-6 z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  NJ Sea Memorial Service
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Engage in a beautiful farewell, scattering ashes upon the
                  waves, where each ripple tells the story of a life well lived
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Us
                </a>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Calendar
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 px-20 md:py-24 lg:py-32 bg-slate-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-row-reverse w-full items-center justify-around gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div>
                <img
                  alt="Image"
                  className="mx-auto aspect-video my-3 h-[300px] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="100"
                  src="/src/assets/Dauntless.jpeg"
                  width="200"
                />
                <img
                  alt="Image"
                  className="mx-auto aspect-video my-3 h-[300px] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="100"
                  src="/src/assets/nearfall.jpeg"
                  width="200"
                />
              </div>
              <div className="flex flex-col justify-center items-start space-y-4 text-black">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-left  sm:text-4xl md:text-5xl">
                    About Our Sea Burials
                  </h2>
                  <p className="max-w-[600px] text-left text-sm text-black">
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
                    can find solace and comfort as they bid farewell to their
                    loved ones, making the sea memorial service a profoundly
                    special and healing experience during a challenging time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Us 
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    View Calendar
                  </a>
                </div>
              </div>
            </div>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8FF] text-black">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our Dock Locations
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find us on the map below.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col mx-10 w-full max-w-sm space-y-2">
                <div className="font-bold text-xl underline">Nearfall</div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2742434934494!2d-74.03153538469961!3d40.18070987939312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227e202c1271f%3A0xc8b2beb9c0d03d94!2s905%20NJ-35%2C%20Belmar%2C%20NJ%2007719!5e0!3m2!1sen!2sus!4v1646195218368!5m2!1sen!2sus"
                  width="400"
                  height="400"
                ></iframe>
              </div>
              <div className="mx-10 w-full max-w-sm space-y-2 flex flex-col">
                <div className="font-bold text-xl underline">Dauntless</div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8526634636078!2d-74.04234640955569!3d40.1009977979869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c185e3e22805ab%3A0x251d3ede964e74af!2sDauntless%20Sport%20Fishing!5e0!3m2!1sen!2sus!4v1705550874283!5m2!1sen!2sus"
                  width="400"
                  height="400"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-full flex flex-col mt-10 justify-center items-center">
              <div className="font-bold text-2xl">Contact Us</div>
              <form className=" min-w-[300px] space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-300 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="subject"
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Copyright 2024 NJ Sea Memorial Service. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
