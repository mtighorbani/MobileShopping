"use client";



import ProductDetailPage from "@/components/products/ProducatDetail";
import ParamsProps from "@/types/types";



const Page = ({ searchParams: { id } }: ParamsProps) => {
  return <ProductDetailPage id={id} />;
};

export default Page;
