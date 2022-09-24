import React, {Fragment} from 'react'
import RepresentationText from "@components/Representation/representation-text";
import RepresentationImage from "@components/Representation/representation-image";
import Image from "next/image";
import newYork from "public/new-york.jpg"

function Representation() {


  return (
    <Fragment>
        {/*########################### Overview 2 ########################### */}
      <section class="py-[60px]" id="representation">
        <div class="container mx-auto md:grid lg:grid-cols-2">
          {/*============= Overview-Column-1 ============= */}
          <RepresentationText/>

          {/*============= Overview-Column-2 ============= */}
          <div className={"hidden md:grid"}>
              <Image
                  src={newYork}
                  layout={"intrinsic"}
                  className={"rounded-xl"}
              />
          </div>

        </div>
      </section>
    </Fragment>
  )
}

export default Representation
