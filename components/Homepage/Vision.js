import React, {Fragment} from 'react'
import Image from "next/image";
import immigrationGIrl from "public/images/immigration-girl.jpg"
import {useRouter} from "next/router";
import indexPageEnglish from "../../public/locales/en/index-page";
import indexPageSpanish from "../../public/locales/es/index-page";

function Vision() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? indexPageEnglish : indexPageSpanish;

  return (
    <Fragment>
      <section className="py-[60px] bg-back-8 bg-cover" id="vision">
        <div className="container mx-auto">
            <div className={"grid lg:grid-cols-2"}>

                {/*Left Grid*/}
                <div className="lg:p-24 p-6" id="overview-col-1">

                    {/*Heading*/}
                    <h3 className="text-[20px] text-center md:text-right text-yellow-900 uppercase">
                        {t.visionHeading}
                    </h3>

                    {/*Title*/}
                    <h2 className="text-[32px] text-center md:text-[42px] md:text-right uppercase mb-12 text-slate-700 font-serif">
                        {t.visionTitle}
                    </h2>

                    {/*Paragraph*/}
                    <p className="text-[16px] leading-[25px] mt-4 text-justify indent-8">
                        {t.visionParagraph}
                    </p>
                </div>

                {/* Right Grid / Image */}
                <Image
                    src={immigrationGIrl}
                    alt = "Immigration Activist"
                    height={800}
                    className={"rounded-xl"}
                />
            </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Vision
