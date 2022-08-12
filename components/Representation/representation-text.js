import React, {Fragment} from "react";
import {useRouter} from "next/router";
import representation_en from "../../public/locales/en/representation_en";
import representation_es from "../../public/locales/es/representation_es";

function RepresentationText() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? representation_en : representation_es;

    return (
        <Fragment>
            <div className="lg:p-24 p-6" id="overview-col-1">
                <h3 className="text-[20px] text-center md:text-right text-slate-700 ">
                    {t.heading}
                </h3>
                <h2 className="text-[20px] lg:text-[40px] text-center md:text-right font-medium font-serif uppercase text-yellow-900">
                    {t.title}
                </h2>
                <p className="text-[16px] leading-[30px] pt-12 text-justify indent-8 ">
                    {t.paragraph}
                </p>
            </div>
        </Fragment>
    )
}

export default RepresentationText
