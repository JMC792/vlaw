import React from 'react'
import {useRouter} from "next/router";
import about_en from '../public/locales/en/about_en'
import about_es from '../public/locales/es/about_es'

function About() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? about_en : about_es ;

  return (
    <div>
        {/*########################### About ########################### */}
      <section class="py-[20px] bg-back-6" id="about">
        <div class="container mx-auto grid lg:grid-cols-2 ">
          {/*============= About-Column-1 ============= */}
          <div class="">
            <img
              class="w-full rounded-xl"
              src="julio1.jpeg"
              alt="Julio Zaconet Valentin"
            ></img>
          </div>

          {/*============= About-Column-2 ============= */}
          <div class="lg:px-12 p-6">
            <div className="text-[20px] text-yellow-900 my-6">
              {t.heading}
            </div>
            <div class="text-[32px] lg:text-[42px] text-slate-700 font-medium font-serif my-6">
              Julio Zaconet Valentin, Esq.
            </div>
            <div class="italic text-[16px] leading-[30px] text-justify">
              {t.quote}
            </div>

            <div class="py-12 space-y-4 indent-8 text-justify">
              <p class="text-[16px] leading-[30px]">
                {t.paragraph1}
              </p>
              <p class="text-[16px] leading-[30px]">
                {t.paragraph2}
              </p>
              <p class="text-[16px] leading-[30px]">
                {t.paragraph3}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
