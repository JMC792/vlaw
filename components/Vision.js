import React from 'react'

function Vision() {
  return (
    <div>
        {/*########################### Overview 1 ########################### */}
      <section class="py-[60px] bg-back-8 bg-cover" id="vision">
        <div class="container mx-auto grid lg:grid-cols-2">
          {/*============= Overview-Column-1 ============= */}
          <div class="lg:p-24 p-6" id="overview-col-1">
            <h3 class="text-[20px] text-center md:text-right text-yellow-900 uppercase">
              Our Vision
            </h3>
            <h2 class="text-[32px] text-center md:text-[42px] md:text-right uppercase mb-12 text-slate-700 font-serif">
              Our commitment to You
            </h2>
            <p class="text-[16px] leading-[25px] mt-4 text-justify indent-8">
              Valentin Law LLC is a full-service immigration law firm based in
              Atlanta. The firm was built by immigrants and serves to help
              immigrants navigate the ever-evolving United States immigration
              system. We represent individuals in all matters of immigration
              proceedings ranging from cases in immigration court, USCIS
              proceedings, federal litigation and even family law -as related to
              immigration. Coming from humble beginnings, and migrant
              backgrounds, we understand the issues immigrants face in such a
              complex judicial system.
            </p>
          </div>

          {/*============= Overview-Column-2 ============= */}
          <div
            class="bg-back-5 bg-cover opacity-90 h-[700px] w-full rounded-xl"
            id="overview-col-2"
          ></div>
        </div>
      </section>
    </div>
  )
}

export default Vision