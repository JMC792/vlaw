import React from 'react'
import Image from "next/image";
import julio from "public/images/julio1.jpeg"
import {useRouter} from "next/router";
import indexPageEnglish from "../../public/locales/en/index-page";
import indexPageSpanish from "../../public/locales/es/index-page";

function About() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? indexPageEnglish : indexPageSpanish;

  return (
    <div>
        {/*########################### About ########################### */}
      <section className="py-[20px] bg-back-6" id="about">
        <div className="container mx-auto">
            <div className={"grid lg:grid-cols-2"}>

                {/*============= About-Column-1 ============= */}
                <Image src={julio}/>

                {/*============= About-Column-2 ============= */}
                <div className="lg:px-12 p-6">
                    <div className="text-[20px] text-yellow-900 my-6">
                        {t.aboutHeading}
                    </div>
                    <div className="text-[32px] lg:text-[42px] text-slate-700 font-medium font-serif my-6">
                        Julio Zaconet Valentin, Esq.
                    </div>
                    <div className="italic text-[16px] leading-[30px] text-justify">
                        {t.aboutQuote}
                    </div>

                    <div className="py-12 space-y-4 indent-8 text-justify">
                        <p className="text-[16px] leading-[30px]">
                            {t.aboutParagraph1}
                        </p>
                        <p className="text-[16px] leading-[30px]">
                            {t.aboutParagraph2}
                        </p>
                        <p className="text-[16px] leading-[30px]">
                            {t.aboutParagraph3}
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default About
