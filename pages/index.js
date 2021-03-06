import {Fragment} from 'react'
import Head from "next/head";
import Navbar from "@components/Navbar/Navbar";
import Header from "@components/Header";
import About from "@components/About";
import Testimonials from "@components/Testimonials";
import Topbar from "@components/Topbar";
import Notification from "@components/Notification";
import Vision from "@components/Vision";
import Practices from "@components/Practices";
import Representation from "@components/Representation";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

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
        <Topbar/>
        <Navbar/>
        <Header/>
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
