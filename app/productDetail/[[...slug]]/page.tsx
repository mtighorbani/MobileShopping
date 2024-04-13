"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";


import ProductDetailPage from "@/components/products/ProducatDetail";
import ParamsProps from "@/types/types";
import { ProductProps } from "@/types/types";


const Page = ({ searchParams: { id } }: ParamsProps) => {


  const url = process.env.NEXT_PUBLIC_API_ADD_PRODUCT;


  const { data: singleProductDetail } = useQuery<ProductProps>({
    queryFn: async () => (await axios.get(`${url}${id}`)).data,
    queryKey: ["singleProductDetail"],
    enabled: true,
  });


  return (
    <ProductDetailPage id={id} singleProductDetail={singleProductDetail} />
  );
};

export default Page;
