import React from 'react';
import Nav from './Nav';

interface PageSplashProps {
    pageTitle: string;
}

const PageSplash: React.FC<PageSplashProps> = ({ pageTitle }) => {
    return (
        <section className="sticky top-0 w-full p-5 pt-10 h-[50vh] bg-[url('/page_splash_bg.png')] bg-no-repeat bg-cover bg-center">
            <Nav />
            <div className='h-full w-full flex items-center justify-center'>
                <div className='text-4xl uppercase crimson-text-regular'>{pageTitle}</div>
            </div>
        </section>
    )
}

export default PageSplash;