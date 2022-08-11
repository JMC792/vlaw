import React from 'react'
import testimonials_en from '../public/locales/en/testimonials_en'
import testimonials_es from '../public/locales/es/testimonials_es'
import {useRouter} from "next/router";

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
          <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-12 text-neutral-800 ">            

            {/*============= Testimonial-Card-1 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">
                  BEST IMMIGRATION LAWYER IN ATLANTA GA
                </h3>
                <p class="py-2">
                  “Julio was great ! Handle our case very well and was very
                  patient with us ! I would love to post our picture on here but
                  I can’t! Julio, continue to be the best lawyer you can be and
                  bless someone else like you bless My husband and I”
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Joseph (Avvo)</div>
                  <div>May 31, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-2 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">He’s great!</h3>
                <p class="py-2">
                  “I cannot thank Julio enough for all of his help over the
                  years. I was blown away by his integrity and all the hard work
                  he did for my family. His work was excellent and he always
                  responded promptly and paid attention to detail. I would
                  recommend Julio to anyone who is serious about having an
                  experienced lawyer that they can trust. Will definitely work
                  with him again in the future!”
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Aakash (Avvo)</div>
                  <div>May 15, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-3 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">
                  “Helped my mother.5.0 stars”
                </h3>
                <p class="py-2">
                  Finally after a year fighting our immigration court case.
                  Julio was able to do the impossible with his impeccable
                  argumentative skills and won. Very glad we hired him for our
                  case!
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Franklin (Avvo)</div>
                  <div>May 12, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-4 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">“Caring Lawyer”</h3>
                <p class="py-2">
                  One thing I truly loved was that Julio listened to me and was
                  personable in my conversation with him. He offers personal
                  care that many big law firms don’t. Thank you Julio for caring
                  about me as a person and for taking delicate care of my
                  case.Finally after a year fighting our immigration court case.
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Anonymous (Avvo)</div>
                  <div>July 12, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-5 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">
                  “Thanks from the bottom of my heart ”
                </h3>
                <p class="py-2">
                  Julio is an amazing lawyer who take my nephew Michael and his
                  family case with an amazing dedication ; he always being very
                  profesional and very dedicated and courteous . Highly
                  recommended . Thank you so much Julio to make my family happy
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Blanca (Avvo)</div>
                  <div>April 27, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-6 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">
                  “Incredible, just incredible”
                </h3>
                <p class="py-2">
                  Julio is an incredibly talented lawyer. He handled my case in
                  immigration court with extreme diligence, poise, and tact.
                  Ultimately, he saved my family and I from being removed from
                  the country to our home country- where we would inevitably
                  live in fear. Thank you, just thank you
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Stephen (Avvo)</div>
                  <div>April 27, 2022</div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
