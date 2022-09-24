import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-slate-800 shadow md:px-6 md:py-16 dark:bg-gray-800">
      <div className="container mx-auto">
        
        {/* Row 1 margin and padding */}
        <div className="py-20 px-4">
          {/* Grid templating*/}
          <div className="grid gap-x-24 gap-y-20 sm:items-center lg:flex text-white">

            {/* Information */}
            <div className="basis-1/4 grid gap-y-8">
              {/* Title */}
              <div className="text-[1.5rem] text-neutral-200">
                <Link href="/">Valentin Law</Link>
              </div>
              {/* Paragraph */}
              <div className="text-white">
                Valentin Law LLC is a full-service immigration law firm based in Atlanta. The firm was built by immigrants and serves to help immigrants navigate the ever-evolving United States immigration system
              </div>
              {/* Contact Information*/}
              <div className="grid gap-y-4 text-white">

                {/* Phone Number */}
                <div className="flex gap-x-2 hover:text-neutral-300">
                  <div className={"flex gap-x-2 cursor-pointer"}>
                    <div className="material-symbols-outlined">call</div>
                    <Link href="tel: 404-919-0443">(404)-919-0443</Link>
                  </div>

                </div>

                {/* Email */}
                <div className="flex gap-x-2 hover:text-neutral-300">
                  <div className={"flex gap-x-2 cursor-pointer"}>
                    <div className="material-symbols-outlined">mail</div>
                    <Link href="mailto: julio@valentinlaw.us">julio@valentinlaw.us</Link>
                  </div>

                </div>

                {/* Address */}
                <div className="flex gap-x-2 hover:text-neutral-300">

                  <Link href="https://goo.gl/maps/dZ4bivM4GiEe7JrU7">
                    <div className={"flex gap-x-2 cursor-pointer"}>
                      <span className="material-symbols-outlined">location_on</span>
                      <div>1201 West Peachtree Street NW Suite 2300, Atlanta GA, 30309</div>
                    </div>

                  </Link>
                </div>

              </div>
            </div>

            {/* Useful Links */}
            <div className="basis-1/4 grid gap-y-8">
              <label className="text-[1.5rem] font-bold">Useful Links</label>

              <div className="hover:text-neutral-300">
                <Link href="#about" >About</Link>
              </div>

              <div className="hover:text-neutral-300">
                <Link href="#practice-area" >Practices</Link>
              </div>

              <div className="hover:text-neutral-300">
                <Link href="https://koalendar.com/e/consultation-koaIkkTh">Consultation</Link>
              </div>

              <div className="hover:text-neutral-300">
                <Link href="https://secure.lawpay.com/pages/valentinlaw/operating">Payment</Link>
              </div>

            </div>

            {/* Social Media */}
            <div className="basis-1/4 grid gap-y-8">
              <label className="text-[1.5rem] font-bold">Follow Our Socials</label>
              <div className="hover:text-neutral-300">
                <Link href="https://www.instagram.com/atlimmigration/" >Instagram</Link>
              </div>
              <div className="hover:text-neutral-300">
                <Link href="https://www.youtube.com/channel/UCw9NjJpXBRKdm9ch_kj1wDQ" >Youtube</Link>
              </div>
              <div className="hover:text-neutral-300">
                <Link href="https://www.tiktok.com/@immigrationatl">TikTok</Link>
              </div>
              <div className="hover:text-neutral-300">
                <Link href="https://twitter.com/valentinlawllc">Twitter</Link>
              </div>

            </div>

            {/* Legal */}
            <div className="basis-1/4 grid gap-y-8">
              <label className="text-[1.5rem] font-bold">Legal</label>

              <div className="hover:text-neutral-300">
                <Link href="#about">About</Link>
              </div >

              <div className="hover:text-neutral-300">
                <Link href="#">Privacy Policy</Link>
              </div>

              <div className="hover:text-neutral-300">
                <Link href="#">Licensing</Link>
              </div>

              <div className="hover:text-neutral-300">
                <Link href="#contact-us">Contact</Link>
              </div>

            </div>

          </div>
        </div>

        {/* Line Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* All Rights Reserved */}
        <span className="flex justify-center text-sm text-neutral-200 sm:text-center dark:text-gray-400 py-4">
          © 2022{" "}
          <a href="https://jesuschavez.dev" className="hover:underline px-2">
            Valentin Law LLC™
          </a>
          . All Rights Reserved.
        </span>

      </div>
      {/*----------------------- Row 1 ----------------------- */}
    </footer>
  );
}
