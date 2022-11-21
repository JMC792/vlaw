import {Fragment} from 'react'
import Hero from "@components/Homepage/Hero";
import About from "@components/Homepage/About";
import Testimonials from "@components/Homepage/Testimonials/Testimonials";
import Notification from "@components/Homepage/Notification";
import Vision from "@components/Homepage/Vision";
import Practices from "@components/Homepage/Practice/Practices";
import Representation from "@components/Homepage/Representation";
import Contact from "@components/Homepage/Contact";

export default function Home() {
  return (
    <Fragment>
          <div className={"text-black bg-white"}>
              <head>
                  <title>Valentin Law</title>
                  <script src="https://kit.fontawesome.com/445848c381.js" crossOrigin="anonymous"/>
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
  )
}
