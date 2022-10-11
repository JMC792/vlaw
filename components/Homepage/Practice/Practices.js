import React from 'react'
import {useRouter} from "next/router";
import practices_en from '../../../public/locales/en/practices_en'
import practices_es from '../../../public/locales/es/practices_es'
import {practiceData} from "@components/Homepage/Practice/practice-data";
import {practiceDataEs} from "@components/Homepage/Practice/practice-data-es";

function Practices() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? practices_en : practices_es;

  const v = locale === 'en' ? practiceData : practiceDataEs

  return (
    <div>
        {/*########################### Practice Areas ########################### */}
      <section className="py-[60px] bg-back-3 bg-cover bg-no-repeat" id="practice-area">
        <div className="container mx-auto">
          <div className="text-neutral-900 py-12">

            {/* Title */}
            <h3 className="text-[24px] text-center font-medium font-serif uppercase text-yellow-900">
              {t.heading}
            </h3>
            <h1 className="text-[60px] text-center font-medium font-serif uppercase pt-4 text-slate-800">
              {t.title}
            </h1>

            {/* Practice Items */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 text-left gap-5 pt-[50px] px-6">
              {v.map((item,index) => {
                return(
                    <div className="rounded-xl text-center text-neutral-200 bg-slate-800 p-12 ">
                      <i className="material-symbols-outlined">{item.cName}</i>
                      <div className="text-[32px] ">{item.title}</div>
                      <p className="text-[14px] pt-[50px]">
                        {item.paragraph}
                      </p>
                    </div>
                )
              })}
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Practices
