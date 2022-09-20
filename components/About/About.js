import React from 'react'
import AboutImage from "@components/About/about-image";
import AboutText from "@components/About/about-text";
import Image from "next/image";
import julio from "public/julio1.jpeg"

function About() {

  return (
    <div>
        {/*########################### About ########################### */}
      <section class="py-[20px] bg-back-6" id="about">
        <div class="container mx-auto">
            <div className={"grid lg:grid-cols-2"}>
                {/*============= About-Column-1 ============= */}
                <Image
                    src={julio}
                />

                {/*============= About-Column-2 ============= */}
                <AboutText/>
            </div>

        </div>
      </section>
    </div>
  )
}

export default About
