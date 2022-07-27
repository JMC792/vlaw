import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, Fragment } from 'react';
import {OffcanvasData} from './offcanvas-data'

function Navbar() {
  

    {/*============= Mobile Navbar Responsive  =============*/}
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


  {/*============= Adds sticky  =============*/}
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
  

  {/*###################################################### Main HTML  ######################################################*/}
    return (
      <Fragment>
        <nav class="z-40 bg-neutral-100 top-0" id="#navbar">
          <div class="z-50 container mx-auto">
            <div class="flex flex-nowrap items-center justify-between">
              {/*----------------------- Column 1 / Logo ----------------------- */}
              <a href="#header" class="">
                <img src="logo.png" class="w-[50px]" alt="Flowbite Logo" />
              </a>

              {/*----------------------- Column 2 ----------------------- */}
              <div className="hidden lg:flex gap-x-6" id="navbar-links">
                <div>
                  <a
                    class="text-[20px] font-medium text-slate-700 hover:text-yellow-900 transition-colors delay-100"
                    href="#vision"
                  >
                    Our Vision
                  </a>
                </div>
                <div>
                  <a
                    class="text-[20px] font-medium text-slate-700 hover:text-yellow-900 transition-colors delay-100"
                    href="#practice-area"
                  >
                    Practice
                  </a>
                </div>
                <div>
                  <a
                    class="text-[20px] font-medium text-slate-700 hover:text-yellow-900 transition-colors delay-100"
                    href="#about"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    class="text-[20px] font-medium text-slate-700 hover:text-yellow-900 transition-colors delay-100"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </div>
                <div>
                  <a
                    class="text-[20px] font-medium text-slate-700 hover:text-yellow-900 transition-colors delay-100"
                    href="#contact-us"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/*----------------------- Column 3 ----------------------- */}
              <div class="text-slate-700 hover:text-yellow-900 transition-colors delay-100 font-bold">
                <span class="material-symbols-outlined">shield</span>
                <span class="ml-2 text-center">Need Help?</span>
                <br></br>
                <a href="tel:+070-3689-56-56-56" class="text-center">
                  Call: (+1) 404-919-0443{" "}
                </a>
              </div>

              {/*----------------------- Column 4 ----------------------- */}
              <div className="hidden xs:flex">
                <a href="#" className="" id="toggle-button">
                  <span onClick={showOffcanvas} className="material-symbols-outlined">menu</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={
            offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"
          }
        >
          <nav className="offcanvas-menu">
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
                  <span class="material-symbols-outlined">close</span>
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