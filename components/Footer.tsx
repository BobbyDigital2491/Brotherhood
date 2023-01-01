import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" pt-4 sm:pt-10 lg:pt-12">
        

        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
              <a
                href="/home"
                className="text-gray-500 hover:text-yellow-500 active:text-indigo-600 transition duration-100"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-500 hover:text-yellow-500 active:text-indigo-600 transition duration-100"
              >
                About
              </a>
              <a
                href="/program"
                className="text-gray-500 hover:text-yellow-500 active:text-indigo-600 transition duration-100"
              >
                Program
              </a>
              <a
                href="https://www.gofundme.com/"
                className="text-gray-500 hover:text-yellow-500 active:text-indigo-600 transition duration-100"
              >
                Donate
              </a>

            </nav>
            <div></div>
          </div>

          <div className="text-gray-400 text-sm text-start flex py-8 justify-between">
            <div className="flex">
              <h1>Privacy Policy</h1>{" "}
              <h1 className="ml-4"> Terms and Conditions</h1>
            </div>
            <div>Copyright © 2022 Sokoni</div>
          </div>
        </footer>
      </div>
    </>
  );
}
