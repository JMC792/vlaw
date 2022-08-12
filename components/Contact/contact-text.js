import React, {Fragment} from "react";
import {useRouter} from "next/router";
import contact_en from "../../public/locales/en/contact_en";
import contact_es from "../../public/locales/es/contact_es";

function ContactText() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? contact_en : contact_es;

    return (
        <Fragment>
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
                    <div className="text-[14px] leading-[27px]">
                        {/*============= Address Row ============= */}
                        <div className="pt-[15px]">
                            <h3 className="font-medium text-2xl text-yellow-900 pb-2">
                                {t.subtitle1}
                            </h3>
                            <span className="material-symbols-outlined">pin_drop</span>
                            <span className="pl-3 text-[20px]">
                    1201 West Peachtree Street NW Suite 2300 Atlanta GA 30309
                  </span>
                        </div>

                        {/*============= Phone Number Row ============= */}
                        <div className="pt-[20px]">
                            <h3 className="font-medium text-2xl text-yellow-900 pb-2">
                                {t.subtitle2}
                            </h3>
                            <span className="material-symbols-outlined">call</span>
                            <a
                                href="tel:+070-3689-56-56-56"
                                className="pl-3 hover:text-blue-500 text-[20px]"
                            >
                                (+1) 404-919-0443
                            </a>
                        </div>

                        {/*============= Email Row ============= */}
                        <div className="pt-[20px]">
                            <h3 className="font-medium text-2xl text-yellow-900 pb-2">
                                {t.subtitle3}
                            </h3>
                            <span className="material-symbols-outlined">mail</span>
                            <a className="pl-3 text-[20px]">julio@valentinlaw.us</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactText
