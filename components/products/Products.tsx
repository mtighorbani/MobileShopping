"use client";


import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/utils/store/ProductStore/Store";
import { fetchProducts } from "@/utils/store/ProductStore/slice-Products";
import { useAppSelector } from "@/utils/store/ProductStore/hooks";


import { sort } from "fast-sort";

import Loading from "../Loading";
import NavSorter from "../sorter/navSorter";
import ProductCard from "./ProductCard";


const Products = () => {

  const [sortProduct, setSortProduct] = useState(false);


  const loading = useAppSelector((state) => state.products.loading);
  const product = useAppSelector((state) => state.products);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(
      fetchProducts("https://fakestoreapi.com/products/category/electronics")
    );
  }, [dispatch]);


  const sortedProducts = !sortProduct
    ? sort(product.products).asc((pr) => pr.price)
    : sort(product.products).desc((pr) => pr.price);


  return (
    <>
      <NavSorter props={setSortProduct} />


      {loading ? (
        <div className=" mt-12 ">
          <Loading text=" Waiting for API ..." />
        </div>
      ) : (
        ""
      )}
      
      <ProductCard sortedProducts={sortedProducts} />
    </>
  );
};

export default Products;
