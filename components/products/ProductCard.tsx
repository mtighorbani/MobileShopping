import Link from "next/link";


import React from "react";
import { GiRoundStar } from "react-icons/gi";


import { StringCurrency } from "@/public/texts/string";
import { ProductProps } from "@/types/types";


const ProductCard = ({sortedProducts}:any) => {

  return (
    <div>
      <div
        dir="rtl"
        className=" max-w-[1320px] mt-[25px] mx-auto grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:content-center max-lg:grid-cols-3 gap-4  "
      >
        {sortedProducts.map((product:ProductProps) => (
          <Link
            href={`/productDetail/${product.id}`}
            className="cursor-pointer "
            key={product.id}
          >
            <div
              className="max-w-[315px] h-[422px] bg-white mb-5 ring-1 ring-[#E0E0E0]  rounded-lg pt-[25px] mx-auto  "
              key={product.id}
            >
              <img
                className="max-w-[213px] h-[239px] mx-auto "
                src={product.image}
                alt={product.title}
              />
              <div className=" mt-7 mx-4 h-16 mb-6 ">
                <div className=" text-left " dir="ltr">
                  {product.title}
                </div>
              </div>
              <div className=" flex justify-between max-w-[283px] mx-auto">
                <div className="flex text-[#757575]">
                  {
                    <GiRoundStar
                      className={`${
                        product.rating.rate < 3
                          ? "text-[#cb5c3a]"
                          : "text-[#F5AC1F]"
                      } text-sm font-medium h-[18px] w-[19px] ml-1`}
                    />
                  }
                  {product.rating.rate.toLocaleString("fa")}
                </div>
                <div className="text-[#1A43D3] font-bold  text-lg">
                  {product.price.toLocaleString("fa")} {StringCurrency.currency}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
