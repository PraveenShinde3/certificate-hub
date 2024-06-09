"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { gradients } from "@/app/utils/data/const";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../../public/vercel.svg";

const Card = ({ certificate, variants }) => {
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      className={`bg-white group hover:shadow-[rgba(17,_17,_26,_0.025)_0px_0px_16px]  cursor-pointer  max-w-full rounded-md flex flex-col justify-between `}
    >
      <Link
        href={{
          pathname: `/certificates/${certificate.title}`,
          query: { id: certificate.id },
        }}
        className=" h-full"
      >
        <div className="p-4 h-full ">
          <div className="flex flex-col justify-between  h-full gap-12">
            <div className="grid grid-cols-3 gap-1 grid-row-1">
              <div className="col-start-1 col-end-2 flex items-center">
                <Image
                  src={certificate.img_url}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className=" w-12 h-auto"
                  alt="Icons"
                />
              </div>
              <div className=" col-start-2 col-end-4 flex flex-col gap-2 ">
                <p className="text-[0.8rem] w-fit font-bold ">
                  {certificate.title}
                </p>
                <div className="flex gap-2 ">
                  {certificate.tags.tags.map((tag) => (
                    <p
                      key={tag}
                      className="font-bold opacity-70 bg-[#f3f3f3] px-2 py-[2px] text-[0.6rem] w-fit rounded-md"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-black font-medium bg-[#f3f3f3] px-2 py-[2px] text-[0.6rem] w-fit rounded-md">
                  Cost : ${certificate?.cost_usd} USD
                </p>
              </div>
              <div>
                <MdArrowOutward className="opacity-30 group-hover:opacity-100 group-hover:scale-125 transition duration-200 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
