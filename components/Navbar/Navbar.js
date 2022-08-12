import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect, Fragment} from 'react';
import {OffcanvasData} from './offcanvas-data'
import {useRouter} from "next/router";
import navbar_en from '../../public/locales/en/navbar_en'
import navbar_es from '../../public/locales/es/navbar_es'

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
        const navbar = document.querySelector('.z-40');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('sticky')
            : navbar.classList.remove('sticky');
    };


    {/*###################################################### Main HTML  ######################################################*/
    }
    return (
        <Fragment>
            <nav className="py-2 z-40 bg-slate-700 top-0" id="#navbar">
                <div className="z-50 container mx-auto">
                    <div className="flex flex-nowrap items-center justify-between">
                        {/*----------------------- Column 1 / Logo ----------------------- */}
                        <a href="#header" className="">
                            <h1 className="text-2xl font-medium font-serif text-neutral-200">Valentin Law</h1>
                        </a>

                        {/*----------------------- Column 2 ----------------------- */}
                        <div className="hidden lg:flex gap-x-6" id="navbar-links">
                            <div>
                                <a
                                    className="text-[20px] text-neutral-200 hover:text-yellow-900 transition-colors delay-100"
                                    href="#vision"
                                >
                                    {t.button1}
                                </a>
                            </div>
                            <div>
                                <a
                                    className="text-[20px] text-neutral-200 hover:text-yellow-900 transition-colors delay-100"
                                    href="#practice-area"
                                >
                                    {t.button2}
                                </a>
                            </div>
                            <div>
                                <a
                                    className="text-[20px] text-neutral-200 hover:text-yellow-900 transition-colors delay-100"
                                    href="#about"
                                >
                                    {t.button3}
                                </a>
                            </div>
                            <div>
                                <a
                                    className="text-[20px] text-neutral-200 hover:text-yellow-900 transition-colors delay-100"
                                    href="#testimonials"
                                >
                                    {t.button4}
                                </a>
                            </div>
                            <div>
                                <a
                                    className="text-[20px] text-neutral-200 hover:text-yellow-900 transition-colors delay-100"
                                    href="#contact-us"
                                >
                                    {t.button5}
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:flex">
                            <a
                                className="text-[20px] text-neutral-200 hover:text-yellow-900 transition-colors delay-100"
                                href={t.page}
                            >
                                {t.button6}
                            </a>
                        </div>

                        {/*----------------------- Column 3 ----------------------- */}
                        <div className="text-neutral-200 hover:text-yellow-900 transition-colors delay-100">
                            <i className="fa-solid fa-phone"></i>
                            <span className="ml-2 text-center">Contact Us:</span>
                            <br></br>
                            <a href="tel: 404-919-0443" className="text-center">
                                (+1) 404-919-0443{" "}
                            </a>
                        </div>

                        {/*----------------------- Column 4 ----------------------- */}
                        <div className="hidden xs:flex">
                            <a href="#" className="text-neutral-200" id="toggle-button">
                                <span onClick={showOffcanvas} className="material-symbols-outlined">menu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/*----------------------- Column 4 ----------------------- */}
            <div className={offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"}>
                <nav className="offcanvas-menu z-50">
                    <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
                        <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/logo.png"
                                            alt="Logo"
                                            width={70}
                                            height={70}
                                        />
                                    </a>
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
