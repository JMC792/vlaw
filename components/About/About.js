import React from 'react'
import AboutImage from "@components/About/about-image";
import AboutText from "@components/About/about-text";

function About() {

  return (
    <div>
        {/*########################### About ########################### */}
      <section class="py-[20px] bg-back-6" id="about">
        <div class="container mx-auto grid lg:grid-cols-2 ">
          {/*============= About-Column-1 ============= */}
            <AboutImage/>

          {/*============= About-Column-2 ============= */}
          <AboutText/>
        </div>
      </section>
    </div>
  )
}

export default About
