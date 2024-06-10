"use client";

import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
// import { createClient } from "@/app/utils/supabase/client";
import { item, container } from "@/app/utils/data/const";
import { motion } from "framer-motion";
import { certificates } from "@/app/utils/data/certificate-data";
import AnimateDiv from "../commons/AnimateDiv";

const Main = () => {
  // const [certificates, setCertificates] = useState([]);
  // useEffect(() => {
  //   const supabase = createClient();
  //   async function fetchData() {
  //     const { data: resourceData, error } = await supabase
  //       .from("certificate_resource")
  //       .select("*")
  //       .order("created_at", { ascending: true });
  //     setCertificates(resourceData);
  //     console.log(resourceData);
  //   }
  //   fetchData();
  // }, [setCertificates]);
  const [certificateData, setCertificateData] = useState(certificates);

  return (
    <div className="h-full">
      <AnimateDiv>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="bg-[#FBFBFB] p-4 "
        >
          {certificateData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificateData.map((certificate) => (
                <Card
                  key={certificate.id}
                  certificate={certificate}
                  variants={item}
                />
              ))}
            </div>
          ) : (
            <div className="h-full">No Certificates Found</div>
          )}
        </motion.div>
      </AnimateDiv>
    </div>
  );
};

export default Main;
