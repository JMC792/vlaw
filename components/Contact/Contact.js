import React from 'react'
import ContactMap from "@components/Contact/contact-map";
import ContactText from "@components/Contact/contact-text";

function Contact() {

  return (
    <div>
        {/*########################### Contact Us ########################### */}
      <section class="py-[20px] bg-back-7 bg-cover" id="contact-us">
        {/*============= Container ============= */}
        <div class="grid lg:grid-cols-2 ">
          {/*============= Left Column ============= */}
          <ContactText/>

          {/*============= RRight Column ============= */}
          <ContactMap/>
        </div>
      </section>
    </div>
  )
}

export default Contact
