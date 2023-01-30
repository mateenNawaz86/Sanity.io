import React from "react";
import HeadContent from "./HeadContent";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <HeadContent />
      <div className="bg-[#5540AF]">
        <div className="container flex flex-col justify-between items-center py-4 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved, ATOM.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <Link href="/">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
