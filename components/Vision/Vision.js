import React, {Fragment} from 'react'
import VisionText from "@components/Vision/vision-text";
import VisionImage from "@components/Vision/vision-Image";

function Vision() {



  return (
    <Fragment>
      <section class="py-[60px] bg-back-8 bg-cover" id="vision">
        <div class="container mx-auto grid lg:grid-cols-2">
          <VisionText/>
          <VisionImage/>
        </div>
      </section>
    </Fragment>
  )
}

export default Vision
