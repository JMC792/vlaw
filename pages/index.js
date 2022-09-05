import {Fragment} from 'react'
import Head from "next/head";
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Testimonials from "@components/Testimonials/Testimonials";
import Topbar from "@components/Navbar/Topbar";
import Notification from "@components/Notification";
import Vision from "@components/Vision/Vision";
import Practices from "@components/Practice/Practices";
import Representation from "@components/Representation/Representation";
import Contact from "@components/Contact/Contact";
import Footer from "@components/Layout/Footer";

export default function Home() {
  return (
    <Fragment class=" text-black  bg-white">
        <head>
        <title>Valentin Law</title>
        <link rel="icon" href="gavel.svg"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          src="https://kit.fontawesome.com/445848c381.js"
          crossorigin="anonymous"
        ></script>
        </head>
        <Navbar/>
        <Hero/>
        <Notification/>
        <Vision/>
        <Practices/>
        <Representation/>
        <About/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </Fragment>
  );
}
