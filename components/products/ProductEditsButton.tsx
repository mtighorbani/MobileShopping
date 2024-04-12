
import React from "react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";


import { productDetails } from "@/public/texts/string";


const ProductEditsButton = ({setopnEdit,setshowDeleteModal}:any) => {
  return (
    <div aria-hidden="true" className="">
      <div
        className="inline-flex w-[178px] h-10 rounded-[50px] bg-white shadow-sm max-sm:relative  "
        role="group"
      >
        <button
          type="button"
          onClick={() => setopnEdit(true)}
          className="inline-flex items-center  px-4 py-2 text-xs font-semibold text-[#1A43D3]  border border-[#E0E0E0] rounded-s-[50px]  "
        >
          <div aria-hidden="true">
            <RiPencilLine className="w-4 h-4 my-auto pl-1" />
          </div>
          {productDetails.edit}
        </button>
        <button
          onClick={() => setshowDeleteModal(true)}
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          type="button"
          className="inline-flex bg-white items-center px-4 py-2 text-xs font-semibold text-[#B02626] text-nowrap  border border-[#E0E0E0] rounded-e-[50px]  "
        >
          <RiDeleteBin6Line className=" w-4 h-4 ml-1 my-auto" />
          {productDetails.delete}
        </button>
      </div>
    </div>
  );
};

export default ProductEditsButton;
