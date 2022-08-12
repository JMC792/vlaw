import React from 'react'
import {useRouter} from "next/router";
import practices_en from '../../public/locales/en/practices_en'
import practices_es from '../../public/locales/es/practices_es'
import PracticeItems from "@components/Practice/practice-items";

function Practices() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? practices_en : practices_es;

  return (
    <div>
        {/*########################### Practice Areas ########################### */}
      <section class="py-[60px] bg-back-3 bg-cover bg-no-repeat" id="practice-area">
        <div class="container mx-auto">
          <div class="text-neutral-900 py-12">
            {/*============= Row-1 ============= */}
            <h3 className="text-[24px] text-center font-medium font-serif uppercase text-yellow-900">
              {t.heading}
            </h3>
            <h1 class="text-[60px] text-center font-medium font-serif uppercase pt-4 text-slate-800">
              {t.title}
            </h1>

            {/*============= Row-2 ============= */}
            <PracticeItems/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Practices
