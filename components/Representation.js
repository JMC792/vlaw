import React from 'react'

function Representation() {
  return (
    <div>
        {/*########################### Overview 2 ########################### */}
      <section class="py-[60px]">
        <div class="container mx-auto md:grid lg:grid-cols-2">
          {/*============= Overview-Column-1 ============= */}
          <div class="lg:p-24" id="overview-col-1">
            <h3 class="text-[20px] text-center md:text-right text-slate-700 ">
              Our Reach
            </h3>
            <h2 class="text-[20px] lg:text-[40px] text-center md:text-right font-medium font-serif uppercase text-yellow-900">
              Representation in 
              <br></br>
              50 States
            </h2>
            <p class="text-[16px] leading-[30px] pt-12 text-justify indent-8 ">
              Since 2020, Mr. Valentin has dedicated himself to hundreds of
              immigration matters and clients. We are proud of his proven record
              of consistently obtaining favorable results in various matters
              including federal actions, immigration appeals, immigration
              trials, and matters before USCIS. We are able to represent you in
              all 50 states, and have notably been successful in the notoriously
              strict Eleventh and Fourth Circuit District Courts, as well as
              actions in Georgia, North Carolina, South Carolina, Florida,
              Alabama, and DC.
            </p>
          </div>

          {/*============= Overview-Column-2 ============= */}
          <div class="bg-back-4 bg-cover rounded-xl"></div>
        </div>
      </section>
    </div>
  )
}

export default Representation