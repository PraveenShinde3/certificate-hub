import React from "react";
import AnimateDiv from "../commons/AnimateDiv";
import Link from "next/link";
import { certificates } from "@/app/utils/data/certificate-data";

const Header = () => {
  return (
    <div className="lg:px-12">
      <AnimateDiv>
        <div className="bg-[#FBFBFB] border-2 border-[#FAFAFA] flex justify-between px-6 py-6 rounded-md">
          <div>
            <Link href="/">
              <p className="font-extrabold w-fit text-lg">Certification </p>
              <p className="font-extrabold w-fit text-lg"> HUB</p>
            </Link>
          </div>
          <div className="flex flex-col gap-2 justify-between items-end">
            <p className=" text-[0.8rem] bg-[#f3f3f3] rounded-md px-3 py-1">
              Total Certification : {certificates.length}
            </p>
            <Link href="/submit">
              <button className="hover:text-white hover:opacity-100 transition-colors duration-200 ease-in-out font-bold opacity-70 text-black hover:bg-zinc-700  text-[0.8rem] bg-[#f3f3f3] rounded-md px-3 py-1">
                Submit link
              </button>
            </Link>
          </div>
        </div>
      </AnimateDiv>
    </div>
  );
};

export default Header;
