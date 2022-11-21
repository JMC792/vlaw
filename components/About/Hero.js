import React, {Fragment} from 'react'
import {useRouter} from "next/router";
import aboutPageEn from "../../public/locales/en/about-page";
import aboutPageSp from "../../public/locales/es/about-page";

function Hero() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en'
        ? aboutPageEn
        : aboutPageSp;

    return (
        <Fragment>
            {/*########################### Hero ###########################*/}
            <div className="bg-back-10 bg-cover bg-no-repeat h-screen" id="header">
                {/* Container */}
                <div className="container mx-auto">

                    {/* Hero Padding */}
                    <div className="py-[15rem] px-[3rem] lg:p-[30rem]">

                        {/* Hero Text */}
                        <div className="text-shadow text-center text-slate-700 uppercase">

                            {/* Title */}
                            <h2 className="text-2xl md:text-5xl">
                                {t.heroTitle}
                            </h2>

                            {/* Subtitle */}
                            <h3 className="text-xl md:text-3xl mt-6">
                                {t.heroSubtitle}
                            </h3>

                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Hero
