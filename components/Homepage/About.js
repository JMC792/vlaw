import React from 'react'
import Image from "next/image";
import julio from "public/images/julio1.jpeg"
import {useRouter} from "next/router";
import indexPageEnglish from "../../public/locales/en/index-page";
import indexPageSpanish from "../../public/locales/es/index-page";
import Link from "next/link";

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
                <Image src={julio}
                       alt = "Julio Zaconet"
                       className={"rounded-xl"}
                />

                {/*============= About-Column-2 ============= */}
                <div className="lg:p-32 p-6 grid gap-y-2">

                    {/* Heading */}
                    <div className="text-[20px] text-yellow-900">
                        {t.aboutHeading}
                    </div>

                    {/* Title */}
                    <div className="text-[32px] lg:text-[42px] text-slate-700 font-medium font-serif">
                        Julio Zaconet Valentin, Esq.
                    </div>

                    {/* Quote */}
                    <div className="italic text-[16px] leading-[30px] text-justify">
                        {t.aboutQuote}
                    </div>

                    {/* Paragraph */}
                    <div className="py-12 space-y-4 indent-8 text-justify">

                        {/* Text */}
                        <p className="text-[16px] leading-[30px]">
                            {t.aboutParagraph1}
                        </p>


                    </div>

                    {/*/!* Button *!/*/}
                    {/*<Link href={"/about"}>*/}
                    {/*    <div className={"bg-yellow-600 lg:mx-36 py-4 rounded-xl hover:bg-yellow-500 transition ease-in"}>*/}
                    {/*        <div className={"text-white text-center text-xl"}>*/}
                    {/*            {t.aboutLink}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default About
