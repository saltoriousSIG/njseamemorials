import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className="flex w-full gap-2 sm:flex-row py-6 pr-20 shrink-0 items-start justify-between border-t bg-slate-800 h-[292px]">
            <div className='h-[51px] w-[276px]'>
                <img src="/logo_white.png" />
            </div>
            <div className='flex flex-col items-start'>
                <a>
                    Home
                </a>
                <a>
                    The Experience
                </a>
                <a>
                    Why A Sea Burial
                </a>
                <a>
                    Policies
                </a>
                <a>
                    Prices
                </a>
                <a>
                    Calendar
                </a>

            </div>
            <div className='flex flex-col items-start'>
                <a>
                    Privacy Policy
                </a>
                <a>
                    Terms and Conditions
                </a>
            </div>
            <div>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>
                    Gmail
                </div>
            </div>
            {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                © Copyright 2024 NJ Sea Memorial Service. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <a className="text-xs hover:underline underline-offset-4" href="#">
                    Terms of Service
                </a>
                <a className="text-xs hover:underline underline-offset-4" href="#">
                    Privacy
                </a>
            </nav> */}
        </footer>
    )

}

export default Footer;