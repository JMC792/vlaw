import {Fragment} from "react";
import Image from "next/image";
import picture from "../../public/images/julio-pilars.jpg";
import {useRouter} from "next/router";
import englishPage from "../../public/locales/en/about-page";
import spanishPage from "../../public/locales/es/about-page";

export default function Goal(){

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en'
        ? englishPage
        : spanishPage;

    return(
        <Fragment>
            <section className={"py-32"}>
                <div className={"container mx-auto md:grid lg:grid-cols-2"}>

                    {/* Left Grid*/}
                    <div className={" md:grid"}>
                        <Image
                            src={picture}
                            height={"1000"}
                            width={"900"}
                            className={"rounded-xl"}
                        />
                    </div>

                    {/* Right Grid */}
                    <div className="lg:p-24 p-6" id="overview-col-1">
                        <h3 className="text-[20px] text-center md:text-left text-slate-700 ">
                            {t.goalHeading}
                        </h3>
                        <h2 className="text-[20px] lg:text-[40px] text-center md:text-left font-medium font-serif uppercase text-yellow-900">
                            {t.goalTitle}
                        </h2>
                        <p className="text-[16px] leading-[30px] pt-12 text-justify indent-8">
                            {t.goalParagraph}
                        </p>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}
