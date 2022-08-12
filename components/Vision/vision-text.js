import React, {Fragment} from "react";
import {useRouter} from "next/router";
import vision_en from "../../public/locales/en/vision_en";
import vision_es from "../../public/locales/es/vision_es";


function VisionText() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? vision_en : vision_es;

    return (
    <Fragment>
        {/*============= Overview-Column-1 ============= */}
        <div class="lg:p-24 p-6" id="overview-col-1">
            <h3 class="text-[20px] text-center md:text-right text-yellow-900 uppercase">
                {t.heading}
            </h3>
            <h2 class="text-[32px] text-center md:text-[42px] md:text-right uppercase mb-12 text-slate-700 font-serif">
                {t.title}
            </h2>
            <p class="text-[16px] leading-[25px] mt-4 text-justify indent-8">
                {t.paragraph}
            </p>
        </div>
    </Fragment>
    )
}

export default VisionText
