import React from "react";

import deleteProduct from "@/api/ProductGetApi";
import { deleteModal } from "@/public/texts/string";


const DeleteModal = ({handleCancel , id}:any) => {



  const deleteProductHandler = () => {
    deleteProduct(`${process.env.NEXT_PUBLIC_API_ADD_PRODUCT}${id}`);
    alert("حذف محصول با موفقیث انجام شد");
  };
 

  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="  backdrop-brightness-50 m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full   mt-[326px] mx-auto">
        <div className="relative bg-white rounded-[20px] shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          ></button>
          <div dir="rtl" className="p-4 md:p-5 ">
            <h3 className=" mb-8 text-lg font-bold text-right  text-black">
              {deleteModal.question}
            </h3>
            <a href="/">
              <button
                onClick={deleteProductHandler}
                type="button"
                className=" bg-[#B02626] rounded-[40px] w-[145px]  text-white font-medium text-lg h-12"
              >
                {deleteModal.confirm}
              </button>
            </a>
            <button
              onClick={()=>handleCancel(false)}
              type="button"
              className="py-2.5 px-5 ms-3  text-black  bg-[#E5E5E5] rounded-[40px] font-semibold text-base w-[98px] h-12 focus:z-10 focus:ring-4"
            >
              {deleteModal.cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
