import React from 'react'
import Link from 'next/link'
import {useState, useEffect, Fragment} from 'react';
import {OffcanvasData} from './offcanvas-data'
import {useRouter} from "next/router";
import navbar_en from '../../../public/locales/en/navbar_en'
import navbar_es from '../../../public/locales/es/navbar_es'
import Topbar from "@components/Layout/Navbar/Topbar";

function Navbar() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? navbar_en : navbar_es;


    // Mobile Navbar Responsive
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    // adds sticky
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    // adds is-sticky css class once scrolled over 250 px
    const isSticky = (e) => {
        const navbar = document.querySelector('.header-selection');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('is-sticky')
            : navbar.classList.remove('is-sticky');
    };

    return (
        <Fragment>
            <nav className="absolute w-full z-10 top-0" id="#navbar">

                {/* TopBar */}
                <Topbar/>

                {/* navbar event listener  */}
                <div className="header-selection sticky-style-1 py-4">

                    {/* container */}
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">

                            {/*  Logo */}
                            <Link href={"/"}>
                                <h1 className="text-2xl font-medium font-serif text-yellow-800 hover:text-yellow-600 transition-colors delay-100 cursor-pointer">Valentin Law</h1>
                            </Link>

                            {/*  Link list */}
                            <div className="hidden lg:flex gap-x-6" id="navbar-links">

                                {/* About Link */}
                                <div className="text-[20px] text-yellow-800 hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/about">{t.button1}</Link>
                                </div>

                                {/* Practice Link */}
                                <div className="text-[20px] text-yellow-800 hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/#practice-area">{t.button2}</Link>
                                </div>

                                {/* Testimonials Link */}
                                <div className="text-[20px] text-yellow-800 hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/#testimonials">{t.button4}</Link>
                                </div>

                                {/* Contact Us Link */}
                                <div className="text-[20px] text-yellow-800 hover:text-yellow-600 transition-colors delay-100">
                                    <Link href="/#contact-us">{t.button5}</Link>
                                </div>


                            </div>

                            {/* Language */}
                            <div className="hidden lg:flex text-[20px] text-yellow-800 hover:text-yellow-600 transition-colors delay-100">
                                <Link href="" locale={t.page}>{t.button6}</Link>
                            </div>

                            {/* Contact Us */}
                            <div className=" lg:block text-yellow-800 hover:text-yellow-600 transition-colors delay-100">
                                <a href="tel: 404-919-0443" className="text-center">
                                    <i className="fa-solid fa-phone"/>
                                        <span className="ml-2 text-center ">{t.button5}</span>
                                            <div>404-919-0443</div>
                                </a>
                            </div>

                            {/* Off-canvas Menu */}
                            <div className="text-yellow-800 cursor-pointer lg:hidden">
                                <Link href="#" id="toggle-button">
                                    <span onClick={showOffcanvas} className="material-symbols-outlined">menu</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </nav>

            {/* Mobile Nav */}
            <div className={offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"}>
                <nav className="offcanvas-menu z-50">
                    <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
                        <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                            <div className="logo">
                                <Link href="/pages">
                                    <h1 className='text-2xl text-slate-800'>
                                        Valentin Law LLC
                                    </h1>
                                </Link>
                            </div>
                            <button
                                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                                aria-label="Right Align"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </li>
                        {OffcanvasData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

        </Fragment>
    );
}

export default Navbar
