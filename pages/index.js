import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div class=" text-black  bg-white">

      <Head>
        <title>Valentin Law</title>
        <link rel="icon" href="gavel.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      {/*########################### Navbar ###########################*/}
      <nav class="z-50 sticky bg-neutral-100 top-0 pb-6" >
        <div class="container flex e mx-auto justify-evenly text-neutral-900 font-serif ">
          <a class="pt-6 hover:text-orange-700 transition-colors delay-100" href="#header">
            Home
          </a>
          <a class="pt-6 hover:text-orange-700 transition-colors delay-100" href="#about">
            About
          </a>
          <a class="pt-6 hover:text-orange-700 transition-colors delay-100" href="#practice-area">
            Practice Areas
          </a>
          <a class="pt-6 hover:text-orange-700 transition-colors delay-100" href="#contact-us">
            Contact Us
          </a>
          <a  class="pt-6 hover:text-orange-700 transition-colors delay-100" href="">
            Espanol
          </a>
        </div>
      </nav>

      {/*########################### Header ###########################*/}
      <header class="bg-back-1 bg-cover bg-no-repeat h-screen -mt-20" id="header">
        <div class="container mx-auto md:grid md:grid-cols-2 ">
          {/*============= Hero-Column-2 ============= */}
          <div class=""></div>

          {/*============= Hero-Column-1 ============= */}
          <div class=" ml-12 text-shadow">
            <div class="font-sans text-left pt-[100px] text-neutral-100 md:text-lime-800">
              <h2 class="md:text-[60px] md:leading-[100px] text-[50px] leading-[1.2] font-serif uppercase">
                Valentin Law LLC
              </h2>
              <p class="text-[24px] mt-[12px] font-serif uppercase">
              "Immigration for All"
              </p>
            </div>
            <div class="mt-8 grid grid-cols-2">
              <a href="#contact-us">
                <button
                  type="button"
                  class="font-serif text-white bg-neutral-600 hover:bg-neutral-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Contact Us
                </button>
              </a>
            </div>
            
          </div>
        </div>
      </header>

      {/*########################### Scheduling  ########################### */}
      <section class="py-10 bg-neutral-200 ">
        <div class="container mx-auto grid grid-cols-2">
          <div class="">
            
          </div>

          <div class="text-center py-[10px]">
          <a href="https://koalendar.com/e/consultation-koaIkkTh">
              <button
                type="button"
                class="text-white bg-neutral-700 rounded-lg md:text-2xl leading-[25px] px-7 py-4 hover:bg-neutral-800 focus:ring-blue-800">
                Schedule a free consultation today!
              </button>
            </a>
            <h1 class="md:text-[28px] text-center">
            *Free Consultations for a Limited Time*
            </h1>
            
          </div>
        </div>
      </section>

      {/*########################### Overview 1 ########################### */}
      <section class="md:pt-160 py-[60px] " >
        <div class="container mx-auto md:grid md:grid-cols-2">

          {/*============= Overview-Column-1 ============= */}
          <div class="m-24" id="overview-col-1">
            <h2 class="sm:text-[32px] md:text-[42px] text-left uppercase mb-12">
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
            class="bg-overview-img-1 bg-cover opacity-90"
            id="overview-col-2"
          ></div>
        </div>
        
      </section>

      {/*########################### Practice Areas ########################### */}
      <section class="py-[5px] bg-neutral-200" >
        <div class="container mx-auto" >
          <div class=" text-center text-neutral-900 py-24 ">
            
            {/*============= Testimonial-Row-1 ============= */}
            <h1 class="text-[42px] uppercase">Practice Areas</h1>

            {/*============= Testimonial-Row-2 ============= */}
            <div class="grid sm:grid-rows-4 md:grid-flow-col text-left gap-8 mt-12 ">

              <div class="text-justify">
                <span class="material-symbols-outlined">shield</span>
                <span class="text-[18px] font-bold pl-3">Removal Defense</span>
                <p class="text-[14px]">
                  Being placed in immigration court may require representation
                  before a judge to prevent eventual removal or deportation. Let
                  us guide you and represent you through this process!
                </p>
              </div>

              <div class="text-justify">
              <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold pl-3">Asylum</span>
                <p class="text-[14px]">
                  Individuals seeking protection from the conditions or past
                  persecution in their home countries may be eligible to apply
                  for asylum with the United States government. We would be
                  happy to discuss your eligibility.{" "}
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">block</span>
                <span class="text-[18px] font-bold pl-3">Cancellation of Removal</span>
                <p class="text-[14px]">
                  Commonly known as the "ten year rule" many individuals who
                  have for such a time been present in the United States and can
                  show certain positive equities may be eligible to fight for
                  their lawful permanent residency in court.{" "}
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">block</span>
                <span class="text-[18px] font-bold pl-3">Adjustment of status</span>
                <p class="text-[14px]">
                  Certain individuals may be eligible to become residents in the
                  United States. Allow us to guide you through your journey to
                  Lawful Permanent Residency.
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">Consular Processing</span>
                <p class="text-[14px]">
                  {" "}
                  Other individuals need to attend a consular appointment in
                  their home country to enter the United States legally. It is
                  often a long and complex process- we are here to help!
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[16px] font-bold">
                  Special Immigrant Juvenile Status
                </span>
                <p class="text-[14px]">
                  Many individuals who entered the United States before their
                  18th birthdays (and in some cases their 21st), and can
                  demonstrate certain family-based characteristics may be
                  eligible for immigration benefits. Allow us to help you or
                  your children.{" "}
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">Naturalization</span>
                <p class="text-[14px]">
                  The path to citizenship is long and complex. Allow us to be
                  your guides in this complex arena and help you in your path to
                  citizenship!
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">Waivers</span>
                <p class="text-[14px]">
                  Certain individuals who have committed crimes, overstayed
                  their allotted status, entered illegally, or many other
                  scenarios may require a waiver of these grounds to reach
                  lawful permanent residency. We can help!
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">Mandamus, APA Actions</span>
                <p class="text-[14px]">
                  Allow us to take a stand before the government if they have
                  taken wrongful action against you, or failed to adhere to the
                  color of the law.{" "}
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">Family Petitions</span>
                <p class="text-[14px]">
                  {" "}
                  Often individuals petition for their spouses, children,
                  parents, etc. so they may lawfully migrate to the United
                  States! Allow us to help you navigate this complex area.{" "}
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">U-Visa/ T-Visa</span>
                <p class="text-[14px]">
                  Certain individuals who have been victims of crimes or
                  trafficking may be eligible for immigration benefits. Schedule
                  a consultation with us today to discuss your eligibility.{" "}
                </p>
              </div>

              <div class="text-justify">
                <span class="material-symbols-outlined">house_with_shield</span>
                <span class="text-[18px] font-bold">DACA</span>
                <p class="text-[14px]">
                  Allow us to help you renew your deferred action for childhood
                  arrivals documents.{" "}
                </p>
              </div>

              
            </div>
            
          </div>
        </div>
      </section>

      {/*########################### Overview 2 ########################### */}
      <section class="py-[60px] " >
        <div class="container mx-auto md:grid md:grid-cols-2">

          {/*============= Overview-Column-1 ============= */}
          <div class="py-24" id="overview-col-1">
            <h2 class="md:text-[42px] text-center uppercase mb-12">
              Representation in <br></br>
              50 States
            </h2>
            <p class="text-[14px] leading-[25px] mt-4 sm:px-[12px] md:px-24 text-justify indent-8">
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
          <div class="bg-back-4 bg-cover ">
          </div>



        </div>
      </section>

      {/*########################### About ########################### */}
      <section class="py-[80px]" id="about">
        <div class="container mx-auto md:grid md:grid-cols-2 ">
          {/*============= About-Column-1 ============= */}
          <div class="">
            <img
              class="w-full"
              src="julio1.jpeg"
              alt="Julio Zaconet Valentin"
            ></img>
          </div>

          {/*============= About-Column-2 ============= */}
          <div class="">
            <div class="px-24 pt-12 text-center">
              <div class="md:text-[32px] lg:text-[42px] my-6">Julio Zaconet Valentin, Esq.</div>
              <div class="md:text-[14px] lg:text-[24px] my-6">Founder and Managing Partner</div>
              <div class="italic text-[14px]">
                "The best part of my practice is knowing that at the end of the
                day, a family gets to remain together — that because of the hard
                work put forth, they now have the ability to make their dreams
                come true, to seize an oppotunity, one that many of us have when
                we come to the United States.”
              </div>
            </div>
            <div class="px-24 py-12 space-y-4 indent-8 text-justify">
              <p class="text-[14px] leading-[25px]">
                A proud native of Peru, Mr. Valentin migrated to the United
                States at the age of 5 with his family. Without knowledge of the
                language or culture, through hard work, Mr. Valentin graduated
                from the University of North Carolina at Chapel Hill in 2017,
                and The University of North Carolina at Chapel Hill School of
                Law in 2020. He became an attorney at the age of 25. He has
                since dedicated his career to representing hundreds of
                individuals in both the fields of criminal and immigration law.
                His experience has ranged widely from that of working directly
                on first-degree murder cases to that of representing individuals
                seeking relief in immigration court
              </p>
              <p class="text-[14px] leading-[25px]">
                After interning, externing, and working in criminal defense for
                multiple years in the Triangle area of North Carolina, Mr.
                Valentin moved to Atlanta, where he honed and mastered
                immigration practice with multiple top boutique firms including
                Vazquez & Servi P.C. and The Fogle Law Firm LLC. While there, he
                proved himself as an expert oral advocate, and tried numerous
                cases before the Executive Office of Immigration Review
                involving asylum, cancellation of removal, adjustment of status,
                etc. Of these cases, Mr. Valentin is proud to have won all but
                one -which is currently on appeal.{" "}
              </p>
              <p class="text-[14px] leading-[25px]">
                Valentin has additionally represented individuals throughout the
                United States in various immigration matters including Federal
                Mandamus actions, APA actions before federal district courts,
                Adjustment of Status, Naturalization, Family Petitions, Waivers,
                and hundreds of interviews before USCIS.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*########################### Testimonials ########################### */}
      <section class="bg-back-2 bg-cover bg-fixed bg-no-repeat py-[60px]">
        <div class="container mx-auto">
          {/*============= Testimonial-Row 1 ============= */}
          <div class="text-[42px] text-white uppercase">
            Testimonials
          </div>

          {/*============= Testimonial-Row 2 ============= */}
          <div class="md:grid md:grid-cols-3 mt-12 text-neutral-800">

            {/*============= Testimonial-Card-1 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">
                  BEST IMMIGRATION LAWYER IN ATLANTA GA
                </h3>
                <p class="py-2">
                  “Julio was great ! Handle our case very well and was very
                  patient with us ! I would love to post our picture on here but
                  I can’t! Julio, continue to be the best lawyer you can be and
                  bless someone else like you bless My husband and I”
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Joseph (Avvo)</div>
                  <div>May 31, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-2 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">He’s great!</h3>
                <p class="py-2">
                  “I cannot thank Julio enough for all of his help over the
                  years. I was blown away by his integrity and all the hard work
                  he did for my family. His work was excellent and he always
                  responded promptly and paid attention to detail. I would
                  recommend Julio to anyone who is serious about having an
                  experienced lawyer that they can trust. Will definitely work
                  with him again in the future!”
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Aakash (Avvo)</div>
                  <div>May 15, 2022</div>
                </div>
              </blockquote>
            </div>

            {/*============= Testimonial-Card-3 ============= */}
            <div class="rounded-xl bg-neutral-200 m-4">
              <blockquote class="p-12">
                <h3 class="text-xl font-bold py-2">
                  “Helped my mother.5.0 stars”
                </h3>
                <p class="py-2">
                  Finally after a year fighting our immigration court case.
                  Julio was able to do the impossible with his impeccable
                  argumentative skills and won. Very glad we hired him for our
                  case!
                </p>
                <div class="text-amber-700 py-2">
                  <div>Posted by Franklin (Avvo)</div>
                  <div>May 12, 2022</div>
                </div>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/*########################### Contact Us ########################### */}
      <section class="py-[60px]" id="contact-us">
        <div class="md:grid md:grid-cols-2">
          {/*============= Contact-Us-Column-1 ============= */}
          <div class="p-24">
            <h1 class="text-left text-5xl pb-[36px]">Contact Us</h1>
            <div class="mt-12 space-y-3 text-xl">
              <div class="text-[14px] leading-[27px]">
                <div class="pt-[15px]">
                  <span class="material-symbols-outlined">pin_drop</span>
                  <span class="pl-3">1201 West Peachtree Street NW Suite 2300 Atlanta GA 30309</span>
                </div>
              
                <div class="pt-[15px]">
                  <span class="material-symbols-outlined">call</span>
                  <a href="tel:+070-3689-56-56-56" class="pl-3 hover:text-blue-500">(+1) 980-957-3914</a>
                </div>
                <div class="pt-[15px]">
                  <span class="material-symbols-outlined">mail</span>
                  <a class="pl-3">julio@valentinlaw.us</a>
                </div>
              </div>
            </div>
          </div>

          {/*============= Contact-Us-Column-2 ============= */}
          <div class="bg-neutral-800">
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.9759958007053!2d-84.38945188448464!3d33.7871180391018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045b68f00001%3A0x2d61f5aaa5b38f55!2s1201%20W%20Peachtree%20St%20NW%20Suite%3A%202300%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1656719326720!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
