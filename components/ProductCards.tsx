"use client";
import { sort } from "fast-sort";
import { GiRoundStar } from "react-icons/gi";
import NavSorter from "./navSorter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/utils/store/ProductStore/Store";
import { fetchProducts } from "@/utils/store/ProductStore/slice-Products";
import { useAppSelector } from "@/utils/store/ProductStore/hooks";
import Link from "next/link";
import { electronicsProduct } from "@/components/global/urls";

const ProductCards = () => {
  const product = useAppSelector((state) => state.products);
   const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts(electronicsProduct));
  }, [dispatch]);


  const [ordered, setOrdered] = useState(false);

  const sortedProducts = !ordered
    ? sort(product.products).asc((pr) => pr.price)
    : sort(product.products).desc((pr) => pr.price);
  return (
    <>
      <NavSorter
        props={(x: boolean) =>
          setOrdered(x)
        }
      />

      <div
        dir="rtl"
        className=" max-w-[1320px] mt-[25px] mx-auto grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:content-center max-lg:grid-cols-3  "
      >
        {sortedProducts.map((product) => (
          <Link href={`/productDetail?id=${product.id}`} className="cursor-pointer ">
            <div
              className="w-[315px] h-[422px] bg-white mb-5 ring-1 ring-[#E0E0E0]  rounded-lg pt-[25px] max-sm:mx-auto"
              key={product.id}
            >
              <img
                className="w-[213px] h-[239px] mx-auto "
                src={product.image}
                alt={product.title}
              />
              <div className=" mt-7 mx-4 h-16 mb-6 ">
                <div className=" text-left " dir="ltr">
                  {product.title}
                </div>
              </div>
              <div className=" flex justify-between w-[283px] mx-auto">
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
                  {product.price.toLocaleString("fa")} تومان
                </div>
              </div>
            </div>
          </Link>
                    ))}
      </div>
    </>
  );
};

export default ProductCards;
