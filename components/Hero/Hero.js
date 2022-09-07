import React, {Fragment} from 'react'
import HeroText from "@components/Hero/hero-text-";

function Hero() {

  return (
    <Fragment>
      {/*########################### Hero ###########################*/}
      <header className="bg-back-1 bg-cover bg-no-repeat h-screen" id="header">
        {/*============= Container ============= */}
        <div className="container mx-auto grid lg:grid-cols-2">

            <div className=""></div>

          {/*============= Hero-Column-2 ============= */}
          <HeroText/>
        </div>
      </header>
    </Fragment>
  )
}

export default Hero
