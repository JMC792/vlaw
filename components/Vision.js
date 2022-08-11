import React from 'react'
import {useRouter} from "next/router";
import vision_en from "../public/locales/en/vision_en";
import vision_es from "../public/locales/es/vision_es";

function Vision() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? vision_en : vision_es;

  return (
    <div>
        {/*########################### Overview 1 ########################### */}
      <section class="py-[60px] bg-back-8 bg-cover" id="vision">
        <div class="container mx-auto grid lg:grid-cols-2">
          {/*============= Overview-Column-1 ============= */}
          <div class="lg:p-24 p-6" id="overview-col-1">
            <h3 class="text-[20px] text-center md:text-right text-yellow-900 uppercase">
              {t.heading}
            </h3>
            <h2 class="text-[32px] text-center md:text-[42px] md:text-right uppercase mb-12 text-slate-700 font-serif">
              {t.title}
            </h2>
            <p class="text-[16px] leading-[25px] mt-4 text-justify indent-8">
              {t.paragraph}
            </p>
          </div>

          {/*============= Overview-Column-2 ============= */}
          <div
            class="bg-back-5 bg-cover opacity-90 h-[700px] w-full rounded-xl"
            id="overview-col-2"
          ></div>
        </div>
      </section>
    </div>
  )
}

export default Vision
