"use client";

import Link from "next/link";


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import Loading from "../Loading";
import { AppDispatch } from "@/utils/store/ProductStore/Store";
import { fetchProducts } from "@/utils/store/ProductStore/slice-Products";
import { useAppSelector } from "@/utils/store/ProductStore/hooks";
import { home,currency } from "@/public/texts/string";


import { sort } from "fast-sort";
import { GiRoundStar } from "react-icons/gi";



const Products = () => {
  const [sortProduct, setSortProduct] = useState(false);
  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);

  const product = useAppSelector((state) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      fetchProducts("https://fakestoreapi.com/products/category/electronics")
    );
  }, [dispatch]);
  const sortDescHnadler = () => {
    setSortProduct(true);
  };
  const sortAscHnadler = () => {
    setSortProduct(false);
  };

  const sortedProducts = !sortProduct
    ? sort(product.products).asc((pr) => pr.price)
    : sort(product.products).desc((pr) => pr.price);

  return (
    <>
      <div
        dir="rtl"
        className=" static max-w-[1320px] h-[56px] mx-auto bg-white rounded-lg ring-1 ring-[#E0E0E0] flex justify-start"
      >
        <div className=" my-auto mr-4 flex ">
          <p
            className={`font-bold cursor-pointer ml-8 text-sm ${
              !sortProduct
                ? "text-[#1A43D3]  decoration-2 underline-offset-8 underline decoration-yellow-400"
                : ""
            } `}
            onClick={sortAscHnadler}
          >
            {home.cheapest}
          </p>
          <p
            className={`font-bold cursor-pointer  text-sm ${
              sortProduct
                ? "text-[#1A43D3]  decoration-2 underline-offset-8 underline decoration-yellow-400"
                : ""
            } `}
            onClick={sortDescHnadler}
          >
            {home.expensive}
          </p>
        </div>
      </div>

      <div
        dir="rtl"
        className=" max-w-[1320px] mt-[25px] mx-auto grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:content-center max-lg:grid-cols-3  "
      >
        {loading ? (
          <div className=" mt-10 w-[1280px] self-center ">
            <Loading text='... Waiting for API'/>
          </div>
        ) : (
          sortedProducts.map((product) => (
            <Link
              href={`/productDetail?id=${product.id}`}
              className="cursor-pointer "
              key={product.id}
            >
              <div
                className="max-w-[315px] h-[422px] bg-white mb-5 ring-1 ring-[#E0E0E0]  rounded-lg pt-[25px] max-sm:mx-auto"
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
                    {product.price.toLocaleString("fa")} {currency.currency}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
