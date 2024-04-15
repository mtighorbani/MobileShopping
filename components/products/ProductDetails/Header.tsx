import { stringProductDetails } from "@/public/texts/string";
import React from "react";
import { GiRoundStar } from "react-icons/gi";

const Header = ({title,rate,count}:any) => {
  return (
    <div>
       <div className=" max-w-[742px] h-16 max-sm:mb-7 max-sm:pt-2 ">
                <p className=" font-bold text-xl text-justify">
                  {title}
                </p>
              </div>
              <div className="  max-w-[491px] h-6 mb-8   mt-2">
                <p className=" text-justify text-nowrap max-sm:text-wrap text-[#757575]   text-ellipsis  text-opacity-[60%]">
                  {title}
                </p>
              </div>
              <div className=" flex justify-between   w-[152px] h-6 text-sm font-normal max-sm:mb-3">
                <GiRoundStar
                  className={`${"text-[#F5AC1F]"}   size-6 ml-1  mt-[-4px]`}
                />
                <p className="text-[#757575] mt-[1px]  ">
                  {rate.toLocaleString("fa")}
                </p>
                <div className=" h-4 mx-3 w-[1px]  mt-[1px] bg-[#E0E0E0] " />
                <div>
                  <p className="mt-[1px] text-[#757575] text-nowrap ">
                    {count.toLocaleString("fa")}
                    {stringProductDetails.countTo}
                  </p>
                </div>
              </div>
    </div>
  );
};

export default Header;
