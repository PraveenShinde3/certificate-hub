"use client";
import AnimateDiv from "@/app/components/commons/AnimateDiv";
import React from "react";
import CertificateSubmitForm from "../components/submit/CertificateSubmitForm";
import BackButton from "../components/commons/BackButton";

const page = () => {
  return (
    <div className="px-2 md:px-12 w-full  flex">
      <AnimateDiv>
        <div className="p-4 md:p-6 w-full bg-[#FBFBFB]  rounded-lg">
          <BackButton />
          <div className="pb-4 pt-2">
            <p className=" text-base font-bold">Submit Certification</p>
            <p className="text-[0.85rem] font-medium opacity-75">
              Submit your certification to be showcase on our portal to help
              others finding their certification.
            </p>
          </div>
          <CertificateSubmitForm />
        </div>
      </AnimateDiv>
    </div>
  );
};

export default page;
