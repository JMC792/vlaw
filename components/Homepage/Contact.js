import React from 'react'
import Link from "next/link";
import contact_en from "../../public/locales/en/contact_en";
import contact_es from "../../public/locales/es/contact_es";
import {useRouter} from "next/router";

function Contact() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? contact_en : contact_es;

  return (
    <div>
        {/*########################### Contact Us ########################### */}
      <section className="py-[20px] bg-back-7 bg-cover" id="contact-us">
        {/*============= Container ============= */}
        <div className="grid lg:grid-cols-2 ">
          {/*============= Left Column ============= */}
            <div className="p-12">
                {/*============= heading ============= */}
                <h1 className="text-[20px] pb-[36px] text-yellow-900 uppercase">
                    {t.heading}
                </h1>

                {/*============= Title ============= */}
                <h1 className="text-[42px] font-serif pb-[36px] text-left font-medium uppercase text-slate-700">
                    {t.title}
                </h1>

                {/*============= List Column ============= */}
                <div className="mt-12 space-y-3 text-xl">
                    <div className="grid gap-y-8 text-[14px] leading-[27px] ">

                        {/*============= Address Row ============= */}
                        <div className="grid">
                            <h3 className="font-medium text-2xl text-yellow-900 pb-2">
                                {t.subtitle1}
                            </h3>
                            <div className="flex gap-x-4">
                                <span className="material-symbols-outlined">pin_drop</span>
                                <div className="grid text-[20px]">
                                    <Link href="https://goo.gl/maps/qLFj8WFUh4Y9BoGE8">
                                        <div className="hover:text-blue-500 cursor-pointer">
                                            1201 West Peachtree Street NW Suite 2300, Atlanta GA, 30309
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*============= Phone Number Row ============= */}
                        <div className="grid">
                            <h3 className="font-medium text-2xl text-yellow-900 pb-2">
                                {t.subtitle2}
                            </h3>

                            <div className="flex gap-x-4">
                                <span className="material-symbols-outlined">call</span>
                                <Link href="tel:+070-3689-56-56-56">
                                    <div className="hover:text-blue-500 text-[20px] cursor-pointer">
                                        (+1) 404-919-0443
                                    </div>
                                </Link>
                            </div>

                        </div>

                        {/*============= Email Row ============= */}
                        <div className="grid">
                            <h3 className="font-medium text-2xl text-yellow-900 pb-2">
                                {t.subtitle3}
                            </h3>
                            <div className="flex gap-x-4">
                                <span className="material-symbols-outlined">mail</span>
                                <Link href="mailto:julio@valentinlaw.us">
                                    <div className="text-[20px] cursor-pointer hover:text-blue-500">
                                        julio@valentinlaw.us
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          {/*============= Map ============= */}
            <div className="bg-neutral-800">
                <iframe
                    className="w-full h-[500px] md:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.9759958007053!2d-84.38945188448464!3d33.7871180391018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045b68f00001%3A0x2d61f5aaa5b38f55!2s1201%20W%20Peachtree%20St%20NW%20Suite%3A%202300%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1656719326720!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
