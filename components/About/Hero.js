import React, {Fragment} from 'react'
import {useRouter} from "next/router";
import aboutPageEn from "../../public/locales/en/about-page";
import aboutPageSp from "../../public/locales/es/about-page";

function Hero() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? aboutPageEn : aboutPageSp;

    return (
        <Fragment>
            {/*########################### Hero ###########################*/}
            <header className="bg-back-1 bg-cover bg-no-repeat h-screen" id="header">
                {/* Container */}
                <div className="container mx-auto">

                    {/* Hero Text */}
                    <div className="p-12 text-shadow">
                        <div className="font-sans text-center pt-[200px] lg:p-[25rem]">
                            {/*============= Row 1 / Title============= */}
                            <h2 className="lg:leading-[100px] text-[30px] md:text-[60px] leading-[1.2] text-slate-700 font-serif uppercase">
                                {t.heroTitle}
                            </h2>

                            {/*============= Row 2 / Subtitle ============= */}
                            <h3 className="text-[14px] md:text-[25px] mt-[12px] text-slate-700 font-serif uppercase">
                                {t.heroSubtitle}
                            </h3>
                        </div>
                    </div>

                </div>
            </header>
        </Fragment>
    )
}

export default Hero
