import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";
import TestimonialItems from "@components/Homepage/Testimonials/testimonials-items";
import indexPageEnglish from "../../../public/locales/en/index-page";
import indexPageSpanish from "../../../public/locales/es/index-page";

function Testimonials() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? indexPageEnglish : indexPageSpanish;

  return (
    <div>
        {/*########################### Testimonials ########################### */}
      <section className="bg-back-2 bg-cover bg-fixed bg-no-repeat py-[60px]" id="testimonials">
        <div className="container mx-auto">

          {/*============= Testimonial-Row 1 ============= */}
          <h2 className="text-[20px] text-neutral-200 text-center uppercase">
            {t.testimonialHeading}
          </h2>
          <h1 className="text-[42px] text-center text-neutral-200 font-serif uppercase">
            {t.testimonialTitle}
          </h1>

          {/*============= Testimonial-Row 2 ============= */}
          <TestimonialItems/>

          {/*============= Testimonial-Row 3 ============= */}
          <div className="pt-10">
            <div className="flex justify-center">
              <Link href="https://www.avvo.com/attorneys/30309-ga-julio-valentin-5140996.html#client_reviews">
                <button
                    type="button"
                    className="text-white bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 w-[14rem]"
                >
                  {t.testimonialReviews}
                </button>
              </Link>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Testimonials
