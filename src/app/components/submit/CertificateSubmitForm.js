"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CertificateSubmitSchema } from "@/app/components/submit/validation.form";
import { VscLoading } from "react-icons/vsc";
import { useState } from "react";
import toast from "react-hot-toast";
import { delay } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const CertificateSubmitForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      certificate_name: "",
      company: "",
      level: "",
      email: "",
      site_url: "",
    },
    resolver: zodResolver(CertificateSubmitSchema),
  });

  const submitCall = handleSubmit(async (data) => {
    setSubmitting(true);
    console.log(data);
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        certificate_name: data.certificate_name,
        company: data.company,
        level: data.level,
        email: data.email,
        site_url: data.site_url,
      }),
    });
    await delay(2);
    setSubmitting(false);
    toast.custom(
      <div className="border-2 flex gap-4 text-[0.85rem] items-center border-green-200 bg-green-100 text-zinc-600 font-medium rounded-md py-2 px-4">
        <FaCheckCircle color="green" />{" "}
        <p>Succesfully Submitted the Certificate</p>
      </div>
    );
  });

  return (
    <form onSubmit={submitCall}>
      <div className="flex gap-4 py-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Certificate Name *
          </label>
          <input
            type="text"
            disabled={isSubmitting}
            placeholder="Enter the certificate name"
            className="mt-2  block w-full sm:text-sm py-2 px-4 border-[1px] border-zinc-300 rounded-md"
            {...register("certificate_name")}
          />
          {errors.certificate_name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.certificate_name.message}
            </p>
          )}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Company *
          </label>
          <input
            type="text"
            disabled={isSubmitting}
            placeholder="Enter the company name"
            className="mt-2  block w-full sm:text-sm py-2 px-4 border-[1px] border-zinc-300 rounded-md"
            {...register("company")}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-4 py-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            disabled={isSubmitting}
            placeholder="Enter the email address"
            className="mt-2 block w-full sm:text-sm py-2 px-4 border-[1px] border-zinc-300 rounded-md"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Level
          </label>
          <select
            disabled={isSubmitting}
            className="mt-2  block w-full sm:text-sm py-2 px-4 border-[1px] border-zinc-300 rounded-md"
            {...register("level")}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Professional</option>
            <option>Expert</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 py-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Certificate Site Url *
          </label>
          <input
            type="text"
            disabled={isSubmitting}
            placeholder="Enter the certification website url"
            className="mt-2  block w-full sm:text-sm py-2 px-4 border-[1px] border-zinc-300 rounded-md"
            {...register("site_url")}
          />
          {errors.site_url && (
            <p className="text-red-500 text-xs mt-1">
              {errors.site_url.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 transition-all ease-in-out duration-200 w-full flex items-center justify-center px-4 py-2 border-2 border-zinc-700 text-base font-medium  rounded-md hover:text-white bg-zinc-100 hover:bg-zinc-700"
      >
        {submitting ? (
          <div className="flex gap-1 items-center">
            <p>Submitting..</p> <VscLoading className="ml-2 animate-spin" />
          </div>
        ) : (
          <p>Submit</p>
        )}
      </button>

      {/* Below Code is for Development purpose */}
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </form>
  );
};

export default CertificateSubmitForm;
