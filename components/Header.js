import React from 'react'
import Navbar from './Navbar/Navbar'

function Header() {
  return (
    <div>
      {/*########################### Header ###########################*/}
      <header class="bg-back-1 bg-cover bg-no-repeat h-screen" id="header">
        {/*============= Container ============= */}
        <div class="container mx-auto grid lg:grid-cols-2">

          {/*============= Hero-Column-1 ============= */}
          <div class=""></div>

          {/*============= Hero-Column-2 ============= */}
          <div class="p-12  text-shadow">
            <div class="font-sans text-left pt-[200px] lg:pt-[100px]">
              {/*============= Row 1 / Title============= */}
              <h2 class="lg:leading-[100px] text-[30px] md:text-[60px] leading-[1.2] text-slate-700 font-serif uppercase">
                Valentin Law LLC
              </h2>

              {/*============= Row 2 / Subtitle ============= */}
              <h3 class="text-[14px] md:text-[25px] mt-[12px] text-slate-700 font-serif uppercase">
                "Immigration for All"
              </h3>

              
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
