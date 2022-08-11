import React from 'react'
import contact_en from '../public/locales/en/contact_en'
import contact_es from '../public/locales/es/contact_es'
import {useRouter} from "next/router";

function Contact() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? contact_en : contact_es;

  return (
    <div>
        {/*########################### Contact Us ########################### */}
      <section class="py-[20px] bg-back-7 bg-cover" id="contact-us">
        {/*============= Container ============= */}
        <div class="grid lg:grid-cols-2 ">
          {/*============= Left Column ============= */}
          <div class="p-12">
            {/*============= heading ============= */}
            <h1 class="text-[20px] pb-[36px] text-yellow-900 uppercase">
              {t.heading}
            </h1>

            {/*============= Title ============= */}
            <h1 class="text-[42px] font-serif pb-[36px] text-left font-medium uppercase text-slate-700">
              {t.title}
            </h1>

            {/*============= List Column ============= */}
            <div class="mt-12 space-y-3 text-xl">
              <div class="text-[14px] leading-[27px]">
                {/*============= Address Row ============= */}
                <div class="pt-[15px]">
                  <h3 class="font-medium text-2xl text-yellow-900 pb-2">
                    {t.subtitle1}
                  </h3>
                  <span class="material-symbols-outlined">pin_drop</span>
                  <span class="pl-3 text-[20px]">
                    1201 West Peachtree Street NW Suite 2300 Atlanta GA 30309
                  </span>
                </div>

                {/*============= Phone Number Row ============= */}
                <div class="pt-[20px]">
                  <h3 class="font-medium text-2xl text-yellow-900 pb-2">
                    {t.subtitle2}
                  </h3>
                  <span class="material-symbols-outlined">call</span>
                  <a
                    href="tel:+070-3689-56-56-56"
                    class="pl-3 hover:text-blue-500 text-[20px]"
                  >
                    (+1) 404-919-0443
                  </a>
                </div>

                {/*============= Email Row ============= */}
                <div class="pt-[20px]">
                  <h3 class="font-medium text-2xl text-yellow-900 pb-2">
                    {t.subtitle3}
                  </h3>
                  <span class="material-symbols-outlined">mail</span>
                  <a class="pl-3 text-[20px]">julio@valentinlaw.us</a>
                </div>
              </div>
            </div>
          </div>

          {/*============= RRight Column ============= */}
          <div class="bg-neutral-800">
            <iframe
              class="w-full h-[500px] md:h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.9759958007053!2d-84.38945188448464!3d33.7871180391018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045b68f00001%3A0x2d61f5aaa5b38f55!2s1201%20W%20Peachtree%20St%20NW%20Suite%3A%202300%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1656719326720!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
