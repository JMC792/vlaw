import React, {Fragment} from "react";
import Link from "next/link";
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
        </Fragment>
    )
}

export default ContactText
