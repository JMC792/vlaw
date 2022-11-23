import {Fragment} from 'react'
import Hero from "@components/Homepage/Hero";
import About from "@components/Homepage/About";
import Testimonials from "@components/Homepage/Testimonials/Testimonials";
import Notification from "@components/Homepage/Notification";
import Vision from "@components/Homepage/Vision";
import Practices from "@components/Homepage/Practice/Practices";
import Representation from "@components/Homepage/Representation";
import Contact from "@components/Homepage/Contact";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <Fragment>
        <Head>
            <title>Valentin Law</title>
            <link rel="icon" href="gavel.svg"/>
        </Head>
        <div className={"text-black bg-white"}>
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
  )
}
