import React from 'react'
import {useRouter} from "next/router";
import practices_en from '../public/locales/en/practices_en'
import practices_es from '../public/locales/es/practices_es'

function Practices() {

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? practices_en : practices_es;

  return (
    <div>
        {/*########################### Practice Areas ########################### */}
      <section
        class="py-[60px] bg-back-3 bg-cover bg-no-repeat"
        id="practice-area"
      >
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
            <div class="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 text-left gap-5 pt-[50px] px-6">
              {/*============= Removal Defense ============= */}
              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">shield</i>
                <div class="text-[32px] ">Removal Defense</div>
                <p class="text-[14px] pt-[80px]">
                  Being placed in immigration court may require representation
                  before a judge to prevent eventual removal or deportation. Let
                  us guide you and represent you through this process!
                </p>
              </div>

              {/*============= Asylum ============= */}
              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined ">house_with_shield</i>
                <div class="text-[32px] text-center">Asylum</div>
                <p class="text-[14px] pt-[80px]">
                  Individuals seeking protection from the conditions or past
                  persecution in their home countries may be eligible to apply
                  for asylum with the United States government. We would be
                  happy to discuss your eligibility.{" "}
                </p>
              </div>

              {/*============= Cancellation of Removal ============= */}
              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">block</i>
                <div class="text-[32px]">Cancellation of Removal</div>
                <p class="text-[14px] pt-[40px]">
                  Commonly known as the "ten year rule" many individuals who
                  have for such a time been present in the United States and can
                  show certain positive equities may be eligible to fight for
                  their lawful permanent residency in court.{" "}
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">build</i>
                <div class="text-[32px] ">Adjustment of status</div>
                <p class="text-[14px] pt-[35px]">
                  Certain individuals may be eligible to become residents in the
                  United States. Allow us to guide you through your journey to
                  Lawful Permanent Residency.
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">groups</i>
                <div class="text-[32px]">Consular Processing</div>
                <p class="text-[14px] pt-[35px]">
                  {" "}
                  Other individuals need to attend a consular appointment in
                  their home country to enter the United States legally. It is
                  often a long and complex process- we are here to help!
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">escalator_warning</i>
                <div class="text-[32px] ">
                  Special Immigrant Juvenile Status
                </div>
                <p class="text-[14px] pt-[35px]">
                  Many individuals who entered the United States before their
                  18th birthdays (and in some cases their 21st), and can
                  demonstrate certain family-based characteristics may be
                  eligible for immigration benefits. Allow us to help you or
                  your children.{" "}
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">approval</i>
                <div class="text-[32px]">Naturalization</div>
                <p class="text-[14px] pt-[80px]">
                  The path to citizenship is long and complex. Allow us to be
                  your guides in this complex arena and help you in your path to
                  citizenship!
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">money_off</i>
                <div class="text-[32px]">Waivers</div>
                <p class="text-[14px] pt-[80px]">
                  Certain individuals who have committed crimes, overstayed
                  their allotted status, entered illegally, or many other
                  scenarios may require a waiver of these grounds to reach
                  lawful permanent residency. We can help!
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">swords</i>
                <div class="text-[32px]">
                  Mandamus,<br></br> APA Actions
                </div>
                <p class="text-[14px] pt-[35px]">
                  Allow us to take a stand before the government if they have
                  taken wrongful action against you, or failed to adhere to the
                  color of the law.{" "}
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">diversity_3</i>
                <div class="text-[32px]">Family Petitions</div>
                <p class="text-[14px] pt-[80px]">
                  {" "}
                  Often individuals petition for their spouses, children,
                  parents, etc. so they may lawfully migrate to the United
                  States! Allow us to help you navigate this complex area.{" "}
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">travel_explore</i>
                <div class="text-[32px]">U-Visa/ T-Visa</div>
                <p class="text-[14px] pt-[80px]">
                  Certain individuals who have been victims of crimes or
                  trafficking may be eligible for immigration benefits. Schedule
                  a consultation with us today to discuss your eligibility.{" "}
                </p>
              </div>

              <div class="text-center text-neutral-200 bg-slate-800 p-12">
                <i class="material-symbols-outlined">boy</i>
                <div class="text-[32px] ">DACA</div>
                <p class="text-[14px] pt-[80px]">
                  Allow us to help you renew your deferred action for childhood
                  arrivals documents.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Practices
