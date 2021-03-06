

export default function Footer() {
  return (
    <footer class=" bg-slate-800 shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div class="container mx-auto">
        
        {/*----------------------- Row 1 ----------------------- */}
        <div class="lg:flex sm:items-center sm:justify-between">

          {/*----------------------- Column 1 / Logo ----------------------- */}
          <a href="#header" class="flex justify-center">
            <img src="logo.png" class="mr-3 w-[100px]" alt="Flowbite Logo" />
            <span class="self-center text-2xl text-neutral-200  font-semibold">
              Valentin Law LLC
            </span>
          </a>

          <div  class="flex justify-center gap-x-20" >
          <a href="https://www.instagram.com/atlimmigration/" class="text-white">
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>

          <a href="https://www.youtube.com/channel/UCw9NjJpXBRKdm9ch_kj1wDQ" class="text-white">
            <i class="fa-brands fa-youtube fa-2x"></i>
          </a>

          <a href="https://www.tiktok.com/@immigrationatl" class="text-white">
            <i class="fa-brands fa-tiktok fa-2x"></i>
          </a>

          <a href="https://twitter.com/valentinlawllc" class="text-white">
            <i class="fa-brands fa-twitter fa-2x"></i>
          </a>

          </div>

          {/*----------------------- Column 2 ----------------------- */}
          <ul class="flex justify-evenly items-center mb-6 text-sm text-neutral-200 py-8 ">
            <li>
              <a href="#about" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#contact-us" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/*----------------------- Row 2 ----------------------- */}
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/*----------------------- Row 3 ----------------------- */}
        <span class="flex justify-center text-sm text-neutral-200 sm:text-center dark:text-gray-400 py-4">
          ?? 2022{" "}
          <a href="https://flowbite.com" class="hover:underline px-2">
            Valentin Law LLC???
          </a>
          . All Rights Reserved.
        </span>
      </div>
      {/*----------------------- Row 1 ----------------------- */}
    </footer>
  );
}
