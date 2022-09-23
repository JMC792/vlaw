import React, {Fragment} from 'react'
import VisionText from "@components/Vision/vision-text";
import VisionImage from "@components/Vision/vision-Image";
import Image from "next/image";
import immigrationGIrl from "public/immigration-girl.jpg"

function Vision() {



  return (
    <Fragment>
      <section class="py-[60px] bg-back-8 bg-cover" id="vision">
        <div class="container mx-auto">
            <div className={"grid lg:grid-cols-2"}>
                <VisionText/>
                <Image
                    src={immigrationGIrl}
                    height={300}
                    className={"rounded-xl"}
                />
            </div>

        </div>
      </section>
    </Fragment>
  )
}

export default Vision
