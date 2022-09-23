import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-slate-800 shadow md:px-6 md:py-16 dark:bg-gray-800">
      <div className="container mx-auto">
        
        {/*----------------------- Row 1 ----------------------- */}
        <div className="lg:flex sm:items-center sm:justify-between">

          {/* Logo */}
          <Link href="#header">
            <span className="self-center text-2xl text-neutral-200  font-semibold cursor-pointer">
              Valentin Law LLC
            </span>
          </Link>


          {/* Social Media */}
          <div  className="flex justify-center gap-x-20" >
          <a href="https://www.instagram.com/atlimmigration/" className="text-white">
            <i className="fa-brands fa-instagram fa-2x"/>
          </a>

          <a href="https://www.youtube.com/channel/UCw9NjJpXBRKdm9ch_kj1wDQ" className="text-white">
            <i className="fa-brands fa-youtube fa-2x"/>
          </a>

          <a href="https://www.tiktok.com/@immigrationatl" className="text-white">
            <i className="fa-brands fa-tiktok fa-2x"/>
          </a>

          <a href="https://twitter.com/valentinlawllc" className="text-white">
            <i className="fa-brands fa-twitter fa-2x"/>
          </a>

          </div>

          {/* Legal */}
          <div className="flex gap-x-4 items-center text-sm text-neutral-200">

            <div>
              <Link href="#about" >
                About
              </Link>
            </div>

            <div>
              <Link href="#" >
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link href="#">
                Licensing
              </Link>
            </div>

            <div>
              <Link href="#contact-us">
                Contact
              </Link>
            </div>

          </div>
        </div>

        {/*----------------------- Row 2 ----------------------- */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/*----------------------- Row 3 ----------------------- */}
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
