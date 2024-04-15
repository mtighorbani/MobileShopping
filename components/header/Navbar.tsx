import Link from "next/link";


import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";


import { UserString } from "@/public/texts/string";


const Navbar = () => {

    
  return (
    <div className=" w-full bg-[#FFFFFF] mb-11">
      <div
        dir="rtl"
        className=" px-[60px] max-sm:px-[20px] m-auto flex justify-between max-w-[1440px] h-[72px] "
      >
        <Link rel="stylesheet" href="/">
          <div className="flex top-[2px] right-[60px] mt-[22px]">
            <div className="w-[24px] rounded-full h-[24px] bg-[#231FF5] relative right-[-10px] "></div>
            <div className="w-[24px]  rounded-full h-[24px] bg-[#F5AC1F] absolute    "></div>
            <p className=" text-[20px] w-[51px] font-[700] pr-2  text-[#1E1C7E]  ">
              {UserString.sitename}
            </p>
          </div>
        </Link>
        <div className="w-[136px] h-[40px] flex justify-center   rounded-[50px] mt-[16px]   ring-[1px] ring-[#0000001F]">
          <MdOutlineAccountCircle className="w-[24px] my-auto h-[24px] text-[#757575] ml-1 max-sm:hidden  " />
          <p className=" font-[400] text-[16px] my-auto text-[#757575]  ">
            {UserString.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
