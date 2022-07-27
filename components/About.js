import React from 'react'

function About() {
  return (
    <div>
        {/*########################### About ########################### */}
      <section class="py-[20px] bg-back-6" id="about">
        <div class="container mx-auto grid lg:grid-cols-2 ">
          {/*============= About-Column-1 ============= */}
          <div class="">
            <img
              class="w-full rounded-xl"
              src="julio1.jpeg"
              alt="Julio Zaconet Valentin"
            ></img>
          </div>

          {/*============= About-Column-2 ============= */}
          <div class="lg:px-12">
            <div className="text-[20px] text-yellow-900 my-6">
              Founder & Managing Partner
            </div>
            <div class="text-[32px] lg:text-[42px] text-slate-700 font-medium font-serif my-6">
              Julio Zaconet Valentin, Esq.
            </div>
            <div class="italic text-[16px] leading-[30px] text-justify">
              "The best part of my practice is knowing that at the end of the
              day, a family gets to remain together — that because of the hard
              work put forth, they now have the ability to make their dreams
              come true, to seize an oppotunity, one that many of us have when
              we come to the United States.”
            </div>

            <div class="py-12 space-y-4 indent-8 text-justify">
              <p class="text-[16px] leading-[30px]">
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
              <p class="text-[16px] leading-[30px]">
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
              <p class="text-[16px] leading-[30px]">
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
    </div>
  )
}

export default About