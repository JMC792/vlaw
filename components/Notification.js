import React from 'react'

function Notification() {
  return (
    <div>
        {/*########################### Notification  ########################### */}
      <section class="py-[50px] bg-back-9 ">
        <div class="container mx-auto">
          
          {/*============= Row 1  ============= */}
          <h1 className="md:text-[40px] text-center font-serif text-neutral-200 uppercase">
          Let us put Our Knowledge 
          <br></br>
          and Experience to Work For You
          </h1>

          {/*============= Row 1  ============= */}
          <h1 className="md:text-[28px] text-center text-neutral-200 py-4">
            *Free Consultations for a Limited Time*
          </h1>
          {/*============= Row 2 / Buttons ============= */}
          <div class="mt-8 flex justify-center md:justify-evenly gap-y-8">
            

            {/*============= Button 2 ============= */}
            <a href="https://koalendar.com/e/consultation-koaIkkTh">
              <button
                type="button"
                className="text-white bg-yellow-600 rounded-lg md:text-[20px] leading-[25px] px-7 py-4 "
              >
                Schedule a Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notification