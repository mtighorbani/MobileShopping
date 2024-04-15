"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import ProductEditor from "@/components/products/ProductDetails/ProductEdit/ProductEditors";
import Loading from "../../Loading";
import ProductImage from "./ProductImage";
import Header from "./Header";
import { ProductProps } from "@/types/types";
import { XDivider, YDivider } from "./Divider";
import Footer from "./Footer";



const ProductDetailPage = ({ id }: any) => {

  const url = process.env.NEXT_PUBLIC_API_ADD_PRODUCT;
  

  const { data: singleProductDetail, isLoading } = useQuery<ProductProps>({
    queryFn: async () => (await axios.get(`${url}${id}`)).data,
    queryKey: ["singleProductDetail"],
    enabled: true,
  });


  return (
    <>
      {isLoading ? (
        <Loading text="Waiting for API ..." />
      ) : (
        <div
          dir="rtl"
          className=" flex bg-white rounded-[20px] ring-1 ring-[#E0E0E0] max-w-[1320px] m-auto max-h-[538px] max-sm:h-[800px]  max-sm:block max-sm:justify-center max-s "
        >
          <div
            dir="rtl"
            className=" w-[40%] h-[100%] max-sm:h-[5%]  max-sm:w-[100%]  "
          >
            <ProductEditor
              id={id}
              price={singleProductDetail?.price}
              title={singleProductDetail?.title}
              description={singleProductDetail?.description}
            />
            <ProductImage
              title={singleProductDetail?.title}
              image={singleProductDetail?.image}
            />
          </div>
          <YDivider />
          <div className=" block mx-5 max-sm:pt-56 mt-10 w-[60%] max-sm:w-[90%]  max-sm:justify-center  ">
            <Header
              title={singleProductDetail?.title}
              rate={singleProductDetail?.rating.rate}
              count={singleProductDetail?.rating.count}
            />
            <div className="my-4">
              <XDivider />
            </div>
            <p className="max-sm:hidden leading-[24px] h-[215px] text-justify text-[#757575] font-normal text-xs">
              {singleProductDetail?.description}
            </p>
            <XDivider />
            <Footer price={singleProductDetail?.price}/>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
