import React from 'react'
import {useRouter} from "next/router";
import indexPageEnglish from "../../public/locales/en/index-page";
import indexPageSpanish from "../../public/locales/es/index-page";


function Notification() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? indexPageEnglish : indexPageSpanish;

  return (
    <div>
        {/*########################### Notification  ########################### */}
      <section className="py-[50px] bg-back-9 ">
        <div className="container mx-auto">
          
          {/* Let us put out knowledge and experience to work for you */}
          <h1 className="md:text-[40px] text-center font-serif text-neutral-200 uppercase">
            {t.notificationTitle}
          </h1>

          {/*/!* Free Initial Consultations *!/*/}
          {/*<h1 className="md:text-[28px] text-center text-neutral-200 py-4">*/}
          {/*  {t.notificationSubtitle}*/}
          {/*</h1>*/}

          {/* Buttons */}
          <div className="mt-8 md:flex grid justify-center md:justify-evenly gap-y-8">
            
            {/* Button 1
            <a href="https://secure.lawpay.com/pages/valentinlaw/operating">
              <button
                type="button"
                className="text-white bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 w-[14rem]"
              >
                {t.notificationButton1}
              </button>
            </a> */}

            {/* Button 2 */}
            <a href="https://valentinlaw.cliogrow.com/book">
              <button
                type="button"
                className="text-white bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 "
              >
                {t.notificationButton2}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notification
