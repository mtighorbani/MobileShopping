"use client";


import { home } from "@/public/texts/string";
import React, { useState } from "react";


const NavSorter = ( {props}: any) => {
  const [sort, setSort] = useState(false);
  props(sort)

  return (
    <div
      dir="rtl"
      className=" static max-w-[1315px] h-[56px] mx-auto bg-white rounded-lg ring-1 ring-[#E0E0E0] flex justify-start"
    >
      <div className=" my-auto mr-4 flex ">
        <p
          className={`font-bold cursor-pointer ml-8 text-sm ${
            !sort
              ? "text-[#1A43D3]  decoration-2 underline-offset-8 underline decoration-yellow-400"
              : ""
          } `}
          onClick={()=>setSort(false)
          }
        >
          {home.cheapest}
        </p>
        <p
          className={`font-bold cursor-pointer  text-sm ${
            sort
              ? "text-[#1A43D3]  decoration-2 underline-offset-8 underline decoration-yellow-400"
              : ""
          } `}
          onClick={()=>setSort(true)}
        >
          {home.expensive}
        </p>
      </div>
    </div>
  );
};

export default NavSorter;
