import React from 'react'
import {useRouter} from "next/router";
import topbar_en from '../public/locales/en/topbar_en'
import topbar_es from '../public/locales/es/topbar_es'

function Topbar() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? topbar_en : topbar_es

  return (
    <div>
        {/*########################### Announcement ###########################*/}
      <div className="hidden lg:block bg-slate-700 py-2">
        <div className="container mx-auto">
          <div className="flex justify-evenly">
            {/*----------------------- Column 1 ----------------------- */}
            <div class="flex text-neutral-200 text-[16px]">
              <span class="material-symbols-outlined text-yellow-600">
                phone
              </span>
              <span class="ml-2 text-center">{t.telephone}</span>
              <a href="tel: 404-919-0443" class="px-2">
                (+1) 404-919-0443{" "}
              </a>
            </div>

            {/*----------------------- Column 2 ----------------------- */}
            <div class="flex text-neutral-200">
              <span class="material-symbols-outlined text-yellow-600">
                mail
              </span>
              <span class="ml-2 text-center">E-mail:</span>
              <a href="mailto: julio@valentinlaw.us" class="px-2">
                julio@valentinlaw.us
              </a>
            </div>

            <div class="flex gap-x-4">
              <span class="text-neutral-200">{t.socials} </span>
              <a
                href="https://www.instagram.com/atlimmigration/"
                class="text-yellow-600"
              >
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UCw9NjJpXBRKdm9ch_kj1wDQ"
                class="text-yellow-600"
              >
                <i class="fa-brands fa-youtube fa-xl"></i>
              </a>

              <a
                href="https://www.tiktok.com/@immigrationatl"
                class="text-yellow-600"
              >
                <i class="fa-brands fa-tiktok fa-xl"></i>
              </a>

              <a
                href="https://twitter.com/valentinlawllc"
                class="text-yellow-600"
              >
                <i class="fa-brands fa-twitter fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
