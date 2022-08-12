import React from 'react'
import testimonials_en from '../../public/locales/en/testimonials_en'
import testimonials_es from '../../public/locales/es/testimonials_es'
import {useRouter} from "next/router";
import TestimonialItems from "@components/Testimonials/testimonials-items";

function Testimonials() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? testimonials_en : testimonials_es;

  return (
    <div>
        {/*########################### Testimonials ########################### */}
      <section class="bg-back-2 bg-cover bg-fixed bg-no-repeat py-[60px]" id="testimonials">
        <div class="container mx-auto">

          {/*============= Testimonial-Row 1 ============= */}
          <h2 className="text-[20px] text-neutral-200 text-center uppercase">
            {t.heading}
          </h2>
          <h1 class="text-[42px] text-center text-neutral-200 font-serif uppercase">
            {t.title}
          </h1>

          {/*============= Testimonial-Row 2 ============= */}
          <TestimonialItems/>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
