import React, {Fragment} from 'react'
import Image from "next/image";
import newYork from "public/images/new-york.jpg"
import {useRouter} from "next/router";
import indexPageEnglish from "../../public/locales/en/index-page";
import indexPageSpanish from "../../public/locales/es/index-page";

function Representation() {

    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? indexPageEnglish : indexPageSpanish;

  return (
    <Fragment>
      <section className="py-[60px]" id="representation">
        {/* Container and Padding */}
        <div className="container mx-auto md:grid lg:grid-cols-2">

            {/* Left Grid */}
            <div className="lg:p-24 p-6" id="overview-col-1">
                <h3 className="text-[20px] text-center md:text-right text-slate-700 ">
                    {t.representationHeading}
                </h3>
                <h2 className="text-[20px] lg:text-[40px] text-center md:text-right font-medium font-serif uppercase text-yellow-900">
                    {t.representationTitle}
                </h2>
                <p className="text-[16px] leading-[30px] pt-12 text-justify indent-8">
                    {t.representationParagraph}
                </p>
            </div>

          {/* Right Grid*/}
          <div className={"hidden md:grid"}>
              <Image
                  src={newYork}
                  layout={"intrinsic"}
                  className={"rounded-xl"}
              />
          </div>

        </div>
      </section>
    </Fragment>
  )
}

export default Representation
