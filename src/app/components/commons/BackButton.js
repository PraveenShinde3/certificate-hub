import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="pb-4">
      <button
        type="button"
        onClick={() => router.back()}
        className="transition-all ease-in-out duration-200 hover:opacity-100 flex gap-2 items-center bg-[#f3f3f3] hover:bg-zinc-700 hover:text-white opacity-70 rounded-md px-4 py-1 text-[0.85rem] font-medium"
      >
        <IoMdArrowRoundBack />
        Back
      </button>
    </div>
  );
};

export default BackButton;
