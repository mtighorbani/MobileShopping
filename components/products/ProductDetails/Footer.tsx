import React from "react";

import { StringCurrency, stringProductDetails } from "@/public/texts/string";

const Footer = ({price}:any) => {
  return (
      <div className="flex justify-between  h-[99px] w-full max-sm:pb-10">
        <div className=" font-medium text-xs my-auto text-[#757575]  ">
          {stringProductDetails.paymentAmount}
        </div>
        <div className=" font-bold my-auto mx-[34px] text-[#1A43D3] text-nowrap text-xl  ">
          {price.toLocaleString("fa")}
          {StringCurrency.currency}
        </div>
      </div>
  );
};

export default Footer;
