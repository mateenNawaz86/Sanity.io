import React from "react";
import Link from "next/link";

const Navbar = ({ profile }) => {
  return (
    <div className="p-5 bg-[#483795]">
      <div className="container flex items-center justify-between ">
        <div>
          <Link href="/">
            <h2 className="cursor-pointer text-2xl font-header font-semibold uppercase text-white  hover:text-orange-600 hover:duration-300">
              {profile}
            </h2>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <Link href="#about" scroll={false}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                  About
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
              </Link>
            </li>

            <li className="group pl-6">
              <Link href="#services" scroll={false}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                  Services
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
              </Link>
            </li>

            <li className="group pl-6">
              <Link href="#projects" scroll={false}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                  Projects
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
              </Link>
            </li>

            <li className="group pl-6">
              <Link href="#experience" scroll={false}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                  Experience
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
              </Link>
            </li>

            <li className="group pl-6">
              <Link href="#blog" scroll={false}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                  Blog
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
              </Link>
            </li>

            <li className="group pl-6">
              <Link href="#contact" scroll={false}>
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                  Contact
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button>
            <i className="bx bx-menu text-4xl text-white " />
          </button>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <h2>Mateen </h2>
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                About
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                Skills
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                Experience
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
