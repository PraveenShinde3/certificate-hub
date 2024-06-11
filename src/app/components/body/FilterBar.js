"use client";

import { IoSearchOutline } from "@/app/utils/data/const";
import Image from "next/image";
import { certificates } from "@/app/utils/data/certificate-data";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AnimateDiv from "../commons/AnimateDiv";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { searchVariants, childrenVariants } from "@/app/utils/data/const";

const FilterBar = () => {
  const [certificateData, setCertificateData] = useState(certificates);
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setIsVisible(true);
    const value = e.target.value;
    if (value === "") {
      setCertificateData(certificates);
    } else if (value.length <= 2) {
      setCertificateData(certificates);
    } else {
      const searchedData = certificates.filter(
        (certificate) =>
          certificate.title
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
          certificate.description.toLowerCase().includes(value.toLowerCase())
      );
      setCertificateData(searchedData);
    }

    console.log(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  console.log(pathname);

  return (
    <>
      {searchValue.length > 0 && isVisible && (
        <motion.div
          variants={searchVariants}
          initial="hidden"
          animate="visible"
          ref={ref}
          className="flex z-20 w-80 md:w-full justify-center items-center"
        >
          <div className="flex flex-col bg-white border-[2px] border-zinc-100 w-96 max-h-96 overflow-y-auto  rounded-xl p-3 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] gap-2 items-center ">
            {certificateData.length > 0 ? (
              certificateData.map((certificate) => (
                <Link
                  key={certificate.id}
                  className="w-full"
                  href={{
                    pathname: `/certificates/${certificate.title}`,
                    query: { id: certificate.id },
                  }}
                  onClick={() => {
                    setSearchValue("");
                  }}
                >
                  <motion.div
                    variants={childrenVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.1 },
                    }}
                    className="w-full border-2 border-zinc-50 hover:scale-[1.02] transition-all ease-in-out duration-150 hover:shadow-[0_8px_30px_rgb(0,0,0,0.042)] rounded-md p-3 flex gap-2 "
                  >
                    <div className="flex items-center">
                      <Image
                        src={certificate.img_url}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-10 h-auto"
                        alt="Icons"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[0.8rem] w-fit font-bold ">
                        {certificate.title}
                      </p>
                      <div className="w-64 overflow-hidden">
                        <p className="text-[0.8rem] opacity-50 whitespace-nowrap overflow-hidden text-ellipsis">
                          {certificate.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="border-2 border-zinc-50 text-center w-full p-2 ">
                <p className="text-[0.9rem] font-bold">No Certificate Found</p>
                <p className="text-[0.8rem] opacity-50">
                  Please try again with different keyword
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
      <AnimateDiv>
        <div className="conatiner w-80 md:w-full h-20 bg-gradient-to-t  from-white via-white to-slate-50/5  p-1 rounded-md flex justify-center items-center gap-4">
          <div className="flex bg-white border-[2px] border-zinc-100 w-96 rounded-xl px-4 py-2 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] gap-4 items-center justify-between ">
            <form
              className="flex items-center w-full justify-center "
              onSubmit={handleSubmit}
            >
              <div className="w-full flex gap-2 items-center justify-center ">
                <IoSearchOutline className=" text-zinc-400" size="0.9rem" />
                <input
                  type="text"
                  autoComplete="off"
                  id="voice-search"
                  placeholder="Search Certificate"
                  required
                  onChange={handleChange}
                  className="text-[0.9rem] w-full  outline-none p-[0.25rem] bg-transparent  "
                />
              </div>
            </form>
          </div>
        </div>
      </AnimateDiv>
    </>
  );
};

export default FilterBar;
