import React, {Fragment} from "react";
import {useRouter} from "next/router";
import about_en from "../../public/locales/en/about_en";
import about_es from "../../public/locales/es/about_es";

function AboutText() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? about_en : about_es ;

    return (
        <Fragment>
            <div className="lg:px-12 p-6">
                <div className="text-[20px] text-yellow-900 my-6">
                    {t.heading}
                </div>
                <div className="text-[32px] lg:text-[42px] text-slate-700 font-medium font-serif my-6">
                    Julio Zaconet Valentin, Esq.
                </div>
                <div className="italic text-[16px] leading-[30px] text-justify">
                    {t.quote}
                </div>

                <div className="py-12 space-y-4 indent-8 text-justify">
                    <p className="text-[16px] leading-[30px]">
                        {t.paragraph1}
                    </p>
                    <p className="text-[16px] leading-[30px]">
                        {t.paragraph2}
                    </p>
                    <p className="text-[16px] leading-[30px]">
                        {t.paragraph3}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutText
