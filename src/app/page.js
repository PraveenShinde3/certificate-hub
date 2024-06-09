import Header from "./components/header/Header";
import React from "react";
import Footer from "./components/body/Footer";
import Main from "./components/body/Main";
import FilterBar from "./components/body/FilterBar";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <div className="container lg:px-12 relative flex flex-col gap-4 justify-center items-center">
        <div className="flex px-8 flex-col items-center z-20 justify-center fixed bottom-0 ">
          <FilterBar />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
}
