"use client";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { VscPass } from "react-icons/vsc";
import { SlBadge } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";
import AnimateDiv from "@/app/components/commons/AnimateDiv";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { createClient } from "@/app/utils/supabase/client";
import Link from "next/link";
import { motion } from "framer-motion";
import { iconVariants } from "@/app/utils/data/const";
import BackButton from "@/app/components/commons/BackButton";
import { certificates } from "@/app/utils/data/certificate-data";

export default function Page({ params }) {
  const searchParams = useSearchParams();
  const [isHovered, setIsHovered] = useState(false);
  const id = searchParams.get("id");
  const [certificateData, setCertificateData] = useState([]);
  useEffect(() => {
    // const supabase = createClient();
    // async function fetchData() {
    //   const { data: resourceData, error } = await supabase
    //     .from("certificate_resource")
    //     .select("")
    //     .eq("id", id)
    //     .order("created_at", { ascending: true });
    //   setCertificateData(resourceData);
    //   console.log(resourceData);
    // }
    // fetchData();
    const data = [];
    data[0] = certificates.find((item) => item.id === id);
    console.log(data);
    setCertificateData(data);
  }, [setCertificateData, id]);

  return (
    <div className="px-2 md:px-12 flex">
      {certificateData.length > 0 ? (
        <AnimateDiv>
          <div className="p-2 md:p-6 bg-[#FBFBFB]  rounded-lg">
            <BackButton />
            <div className="rounded-lg bg-white overflow-hidden">
              <div className=" relative w-full  h-48 flex items-center justify-between">
                <div className="absolute bg-white inset-0 z-10 h-full w-full  bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:8px_8px] [mask-image:radial-gradient(ellipse_100%_60%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                <div className="w-full z-10 px-2 md:px-12 flex flex-col md:flex-row gap-8 md:gap-0 justify-between md:items-center mt-10">
                  <div className=" flex gap-6">
                    <div className="w-16 rounded-md h-16 flex items-center max-h-fit p-2  ">
                      <Image
                        src={certificateData[0].img_url}
                        alt="icons"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" w-16  h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className=" w-36 text-[0.9rem] leading-5 font-semibold ">
                        {certificateData[0].title}
                      </p>
                      <p className="text-black font-semibold bg-[#f3f3f3] px-2 py-[2px] text-[0.6rem] w-fit rounded-sm">
                        ${certificateData[0].cost_usd} USD
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link target="_blank" href={certificateData[0].site_url}>
                      <motion.button
                        initial="default"
                        whileHover="hover"
                        className="flex gap-2 items-center text-black hover:text-white border-2 border-zinc-700  opacity-100 transition-colors duration-300 ease-in-out font-medium hover:bg-zinc-700 hover:bg-transparent text-[0.8rem] rounded-md px-3 py-1"
                      >
                        Visit Website
                        <motion.div variants={iconVariants}>
                          <CgArrowTopRight />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-3 md:px-12 py-2">
                <div className="flex flex-col gap-2 py-3">
                  <p className="text-[0.9rem] font-bold">
                    About the Certification
                  </p>
                  <p className="text-[0.85rem] opacity-70 font-medium ">
                    {certificateData[0].description}
                  </p>
                </div>
                <div className="py-3 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2">
                  <div className="flex gap-2 font-medium items-center text-[0.8rem] col-start-1 row-start-1">
                    <IoMdTime className="min-w-fit" />
                    <p>
                      Exam Duration: {certificateData[0].exam_duration} minutes
                    </p>
                  </div>
                  <div className="flex gap-2 font-medium items-center text-[0.8rem] col-start-1 md:col-start-2 row-start-2 md:row-start-1">
                    <VscPass className="min-w-fit" />
                    <p>
                      Passing Score: {certificateData[0].passing_score} out of{" "}
                      {certificateData[0].total_score} points
                    </p>
                  </div>
                  <div className="flex gap-2 font-medium items-center text-[0.8rem] col-start-1 row-start-3 md:row-start-2">
                    <SlBadge className="min-w-fit" />
                    <p>{certificateData[0].validate_description}</p>
                  </div>
                  <div className="flex gap-2 font-medium items-center text-[0.8rem] col-start-1 md:col-start-2 row-start-4 md:row-start-2">
                    <MdOutlineWorkOutline className="min-w-fit" />
                    <p>Boost your career opportunities</p>
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-[0.9rem] font-bold">Key Features</p>
                  <ul className="px-4 py-1 text-[0.85rem] opacity-70 font-medium list-disc list-inside">
                    {certificateData[0].key_features.map((feature, index) => (
                      <li key={index} className=" capitalize">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="py-3">
                  <p className="text-[0.9rem] font-bold">Why Get Certified?</p>
                  <ul className="px-4 py-1 text-[0.85rem] opacity-70 font-medium list-disc list-inside">
                    {certificateData[0].why_to_get_certified.map(
                      (feature, index) => (
                        <li key={index} className="py-1 capitalize">
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* <p>Post: {params.certificate}</p> */}
              </div>
            </div>
          </div>
        </AnimateDiv>
      ) : (
        <AnimateDiv>
          <div className="relative w-full h-48  flex justify-center items-center">
            <span class=" animate-pulse absolute inline-flex h-full w-full rounded-md bg-zinc-100 opacity-75"></span>
            {/* <span class=" absolute inline-flex h-full w-full rounded-md bg-zinc-700 opacity-75"></span> */}
            <p>Loading...</p>
          </div>
        </AnimateDiv>
      )}
    </div>
  );
}
