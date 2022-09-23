import {Fragment} from 'react'
import Head from "next/head";
import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Testimonials from "@components/Testimonials/Testimonials";
import Topbar from "@components/Layout/Navbar/Topbar";
import Notification from "@components/Notification";
import Vision from "@components/Vision";
import Practices from "@components/Practice/Practices";
import Representation from "@components/Representation/Representation";
import Contact from "@components/Contact/Contact";

export default function Home() {
  return (
    <Fragment>
          <div className={"text-black bg-white"}>
              <head>
                  <script
                      src="https://kit.fontawesome.com/445848c381.js"
                      crossOrigin="anonymous"
                  ></script>
              </head>
              <Hero/>
              <Notification/>
              <Vision/>
              <Practices/>
              <Representation/>
              <About/>
              <Testimonials/>
              <Contact/>
          </div>

    </Fragment>
  );
}
