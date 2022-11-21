import {Fragment} from "react";
import Image from "next/image";
import client from "../../public/images/valentin-law-client.jpg";
import {useRouter} from "next/router";
import indexPageEnglish from "../../public/locales/en/about-page";
import indexPageSpanish from "../../public/locales/es/about-page";

export default function EarlyLife(){

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? indexPageEnglish : indexPageSpanish;

    return(
        <Fragment>
            <section className={"py-32"}>
                <div className={"container mx-auto md:grid lg:grid-cols-2"}>

                    {/* Left Grid */}
                    <div className="lg:p-24 p-6" id="overview-col-1">
                        <h3 className="text-[20px] text-center md:text-right text-slate-700 ">
                            {t.earlyLifeHeading}
                        </h3>
                        <h2 className="text-[20px] lg:text-[40px] text-center md:text-right font-medium font-serif uppercase text-yellow-900">
                            {t.earlyLifeTitle}
                        </h2>
                        <p className="text-[16px] leading-[30px] pt-12 text-justify indent-8">
                            {t.earlyLifeParagraph}
                        </p>
                    </div>

                    {/* Right Grid*/}
                    <div className={"hidden md:grid"}>
                        <Image
                            src={client}
                            alt={"Lawyer-Client"}
                            layout={"intrinsic"}
                            className={"rounded-xl"}
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
