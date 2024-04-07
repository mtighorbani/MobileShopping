"use client";


import React, { useState } from "react";


const NavSorter = ( {props}: any) => {
  const [sort, setSort] = useState(false);
  props(sort)
  const sortDescHnadler= () => {
    setSort(props);
  };
  const sortAscHnadler= () => {
    setSort(props);
  };
  return (
    <div
      dir="rtl"
      className=" static max-w-[1320px] h-[56px] mx-auto bg-white rounded-lg ring-1 ring-[#E0E0E0] flex justify-start"
    >
      <div className=" my-auto mr-4 flex ">
        <p
          className={`font-bold cursor-pointer ml-8 text-sm ${
            !sort
              ? "text-[#1A43D3]  decoration-2 underline-offset-8 underline decoration-yellow-400"
              : ""
          } `}
          onClick={sortAscHnadler}
        >
          ارزان ترین
        </p>
        <p
          className={`font-bold cursor-pointer  text-sm ${
            sort
              ? "text-[#1A43D3]  decoration-2 underline-offset-8 underline decoration-yellow-400"
              : ""
          } `}
          onClick={sortDescHnadler}
        >
          گران ترین
        </p>
      </div>
    </div>
  );
};

export default NavSorter;
