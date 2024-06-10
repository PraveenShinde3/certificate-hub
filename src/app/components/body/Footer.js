import React from "react";
import AnimateDiv from "../commons/AnimateDiv";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-12 px-4 md:px-24 w-full md:w-2/3">
      <AnimateDiv>
        <div className="flex text-[0.85rem] flex-col gap-1 justify-center items-center">
          <p className="font-semibold">Certification Hub</p>
          <p className="text-xs text-center">
            Certification Hub is a directory of selected technical
            certifications. Explore a curated selection by tech, companies,
            price, and many more.
          </p>
          <p className="p-2 text-xs">
            Built by{" "}
            <Link
              href={"https://github.com/PraveenShinde3"}
              className=" cursor-pointer font-semibold"
              target="_blank"
            >
              @PraveenShinde
            </Link>
          </p>
        </div>
      </AnimateDiv>
    </div>
  );
};

export default Footer;
