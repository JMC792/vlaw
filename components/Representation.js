import React from 'react'
import representation_en from '../public/locales/en/representation_en'
import representation_es from '../public/locales/es/representation_es'
import {useRouter} from "next/router";

function Representation() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? representation_en : representation_es;

  return (
    <div>
        {/*########################### Overview 2 ########################### */}
      <section class="py-[60px]" id="representation">
        <div class="container mx-auto md:grid lg:grid-cols-2">
          {/*============= Overview-Column-1 ============= */}
          <div class="lg:p-24 p-6" id="overview-col-1">
            <h3 class="text-[20px] text-center md:text-right text-slate-700 ">
              {t.heading}
            </h3>
            <h2 class="text-[20px] lg:text-[40px] text-center md:text-right font-medium font-serif uppercase text-yellow-900">
              {t.title}
            </h2>
            <p class="text-[16px] leading-[30px] pt-12 text-justify indent-8 ">
              {t.paragraph}
            </p>
          </div>

          {/*============= Overview-Column-2 ============= */}
          <div class="bg-back-4 bg-cover rounded-xl"></div>
        </div>
      </section>
    </div>
  )
}

export default Representation
