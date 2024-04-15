import React from "react";

const ProductImage = ({ image, title }: any) => {
  return (
    <div className=" max-sm:pt-4">
      {
        <img
          src={image}
          alt={title}
          className="m-auto my-[48px] w-[394px] max-sm:h-[220px] h-[442px] max-sm:w-[250px]"
        ></img>
      }
    </div>
  );
};

export default ProductImage;
