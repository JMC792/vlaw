import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect, Fragment} from 'react';
import {OffcanvasData} from './offcanvas-data'
import {useRouter} from "next/router";
import navbar_en from '../../../public/locales/en/navbar_en'
import navbar_es from '../../../public/locales/es/navbar_es'
import Topbar from "@components/Layout/Navbar/Topbar";
import logo from "public/logo.svg"

function Navbar() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? navbar_en : navbar_es;


    {/*============= Mobile Navbar Responsive  =============*/
    }
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    {/*============= Adds sticky  =============*/
    }
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const navbar = document.querySelector('.header-selection');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('is-sticky')
            : navbar.classList.remove('is-sticky');
    };


    {/*###################################################### Main HTML  ######################################################*/
    }
    return (
        <Fragment>

            {/*----------------------- Desktop Nav ----------------------- */}
            <nav className="bg-slate-800 w-full z-10 top-0" id="#navbar">
                {/*----------------------- TopBar ----------------------- */}
                <Topbar/>
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">
                        <div className="flex flex-nowrap items-center justify-between">
                            {/*----------------------- Logo ----------------------- */}
                            <Link href={"/"}>
                                <h1 className="text-2xl font-medium font-serif text-yellow-700 hover:text-yellow-600 transition-colors delay-100 cursor-pointer">Valentin Law</h1>
                            </Link>

                            {/*----------------------- Link list ----------------------- */}
                            <div className="hidden lg:flex gap-x-6" id="navbar-links">
                                <div>
                                    <a
                                        className="text-[20px] text-yellow-700 hover:text-yellow-600 transition-colors delay-100"
                                        href="#vision"
                                    >
                                        {t.button1}
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-[20px] text-yellow-700 hover:text-yellow-600 transition-colors delay-100"
                                        href="#practice-area"
                                    >
                                        {t.button2}
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-[20px] text-yellow-700 hover:text-yellow-600 transition-colors delay-100"
                                        href="#about"
                                    >
                                        {t.button3}
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-[20px] text-yellow-700 hover:text-yellow-600 transition-colors delay-100"
                                        href="/posts"
                                    >
                                        {t.button4}
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="text-[20px] text-yellow-700 hover:text-yellow-600 transition-colors delay-100"
                                        href="#contact-us"
                                    >
                                        {t.button5}
                                    </a>
                                </div>
                            </div>

                            {/*----------------------- Language ----------------------- */}
                            <div className="hidden lg:flex">
                                <a
                                    className="text-[20px] text-yellow-700 hover:text-yellow-600 transition-colors delay-100"
                                    href={t.page}
                                >
                                    {t.button6}
                                </a>
                            </div>

                            {/*----------------------- Contact Us ----------------------- */}
                            <div className=" lg:block text-yellow-700 hover:text-yellow-600 transition-colors delay-100">
                                <a href="tel: 404-919-0443" className="text-center">
                                    <i className="fa-solid fa-phone"></i>
                                        <span className="ml-2 text-center ">{t.button5}</span>
                                            <div>404-919-0443</div>
                                </a>
                            </div>

                            {/*----------------------- Off-canvas Menu ----------------------- */}
                            <div className="xs:flex">
                                <a href="#" className="text-yellow-700" id="toggle-button">
                                    <span onClick={showOffcanvas} className="material-symbols-outlined">menu</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>

            {/*----------------------- Mobile Nav ----------------------- */}
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
