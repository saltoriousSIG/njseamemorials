import React from "react";

interface NavProps {}


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


const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div>
      <header>
        <nav className="flex w-full justify-end">
          <div className="mx-2">732-232-5620</div>
          <div className="mx-2">732-892-4298</div>
        </nav>
      </header>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <img className="h-[35px] w-auto" src='/assets/seamemorial_bg.png'/>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/theexperience"
          >
            The Experiece
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/whyseaburial"
          >
            Why A Sea Burial
            
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/policies"
          >
            Policies
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/prices"
          >
            Prices
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/calendar"
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
    </div>
  );
};

export default Nav;
