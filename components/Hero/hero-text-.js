import React, {Fragment} from "react";
import {useRouter} from "next/router";
import hero from "../../public/locales/en/hero_en";
import heroe from "../../public/locales/es/hero_es";

function HeroText() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? hero : heroe;

    return (
        <Fragment>
            {/*============= Hero-Column-2 ============= */}
            <div className="p-12 text-shadow">
                <div className="font-sans text-left pt-[200px] lg:pt-[100px]">
                    {/*============= Row 1 / Title============= */}
                    <h2 className="lg:leading-[100px] text-[30px] md:text-[60px] leading-[1.2] text-slate-700 font-serif uppercase">
                        Valentin Law LLC
                    </h2>

                    {/*============= Row 2 / Subtitle ============= */}
                    <h3 className="text-[14px] md:text-[25px] mt-[12px] text-slate-700 font-serif uppercase">
                        {t.slogan}
                    </h3>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroText
