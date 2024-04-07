"use client";


import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { GiRoundStar } from "react-icons/gi";


import ProductEditor from "@/components/products/ProductEditor";
import { ProductProps } from "@/types/types";



interface Props {
  params: { slug: string };
  searchParams: { id: number };
}

const Page = ({ params: { slug }, searchParams: { id } }: Props) => {
  const { data: singleProductDetail } = useQuery<ProductProps>({
    queryFn: async () =>
      (await axios.get(`${process.env.ADD_PRODUCT}${id}`)).data,
    queryKey: ["singleProductDetail"],
    enabled: true,
  });

  return (
    <>
      <div
        dir="rtl"
        className=" flex bg-white rounded-[20px] ring-1 ring-[#E0E0E0] max-w-[1320px] m-auto max-h-[538px] max-sm:h-[800px]  max-sm:block max-sm:justify-center max-s "
      >
        <>
          <div
            dir="rtl"
            className=" w-[40%] h-[100%] max-sm:h-[5%]  max-sm:w-[100%]  "
          >
            <div className=" absolute mt-5 mr-5">
              <ProductEditor
                id={id}
                price={singleProductDetail?.price}
                title={singleProductDetail?.title}
                description={singleProductDetail?.description}
              />
            </div>
            <div className=" max-sm:pt-4">
              {
                <img
                  src={singleProductDetail?.image}
                  alt={singleProductDetail?.title}
                  className="m-auto my-[48px] w-[394px] max-sm:h-[220px] h-[442px] max-sm:w-[250px]"
                ></img>
              }
            </div>
          </div>
          <div className=" max-sm:hidden h-fullw-[1px]  bg-[#E0E0E0]  " />
          <div className=" block mx-5 max-sm:pt-56 mt-10 w-[60%] max-sm:w-[90%]  max-sm:justify-center  ">
            <div className=" max-w-[742px] h-16 max-sm:mb-7 max-sm:pt-2 ">
              <p className=" font-bold text-xl text-justify">
                {singleProductDetail?.title}
              </p>
            </div>
            <div className="  max-w-[491px] h-6 mb-8   mt-2">
              <p className=" text-justify text-nowrap max-sm:text-wrap text-[#757575]   text-ellipsis  text-opacity-[60%]">
                {singleProductDetail?.title}
              </p>
            </div>
            <div className=" flex justify-between  w-[152px] h-6 text-sm font-normal max-sm:mb-3">
              <GiRoundStar
                className={`${"text-[#F5AC1F]"} font-medium h-[18px] w-[19.5px] ml-1 bottom-[-4px]`}
              />

              <p className="text-[#757575] mt-[1px]  ">
                {singleProductDetail?.rating.rate.toLocaleString("fa")}
              </p>
              <div className=" h-4 mx-3 w-[1px]  mt-[1px] bg-[#E0E0E0] " />

              <div>
                <p className="mt-[1px] text-[#757575] text-nowrap ">
                  {singleProductDetail?.rating.count.toLocaleString("fa")} تا
                  باقی مانده
                </p>
              </div>
            </div>
            <div className=" max-sm:hidden  my-4 h-[1px] mx-3 w-[742px] content-center bg-[#E0E0E0] " />
            <p className="max-sm:hidden leading-[24px] h-[215px] text-justify text-[#757575] font-normal text-xs">
              {singleProductDetail?.description}
            </p>
            <div className=" max-sm:w-full  h-[1px]  bg-[#E0E0E0] " />
            <div className="flex justify-between  h-[99px] w-full max-sm:pb-10">
              <div className=" font-medium text-xs my-auto text-[#757575]  ">
                {" "}
                مبلغ قابل پرداخت :
              </div>
              <div className=" font-bold my-auto mx-[34px] text-[#1A43D3] text-nowrap text-xl  ">
                {" "}
                {singleProductDetail?.price.toLocaleString("fa")} تومان
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Page;
