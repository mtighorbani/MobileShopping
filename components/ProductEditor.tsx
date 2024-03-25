"use client";
import deleteProduct from "@/hooks/ProductGetApi";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { EditProductCommand, ProductId, ProductProps } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { Divider, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { AddProducts } from "@/global/urls";



const ProductEditor = ({ id , price, title, description }: any) => {
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [opnEdit, setopnEdit] = useState(false);



  const showEditForm = () => {
    setopnEdit(true);
  };

  const hideEditForm = () => {
    setopnEdit(false);
  };

  const showModal = () => {
    setshowDeleteModal(true);
  };
  const hideModal = () => {
    setshowDeleteModal(false);
  };

  const deleteProductHandler = () => {
    deleteProduct(`${AddProducts}${id}`);
    alert("عملیات با موفقیث انجام شد");
    setshowDeleteModal(false);
  };

  const [form] = Form.useForm();

  const { mutate: mutateProductEdit, isPending: pendingProductEdit } =
    useMutation({
      mutationFn: async (data: EditProductCommand) =>
        (await axios.put<EditProductCommand>(`${AddProducts}${id}`, data))
          .data,
      onSuccess: () => {
        alert("ویرایش محصول با موفقیت انجام شد");
      },
      onError: () => {
        console.log("متاسفانه خطایی رخ داده است");
      },
    });

  const onFinish = (values: EditProductCommand) => {
    console.log("Received values of form: ", values);
    mutateProductEdit(values);
  };

  return (
    <div aria-hidden="true" className="">
      <div
        className="inline-flex w-[178px] h-10 rounded-[50px] bg-white shadow-sm max-sm:relative  "
        role="group"
      >
        <button
          type="button"
          onClick={showEditForm}
          className="inline-flex items-center  px-4 py-2 text-xs font-semibold text-[#1A43D3]  border border-[#E0E0E0] rounded-s-[50px]  "
        >
          <div aria-hidden="true">
            <RiPencilLine className="w-4 h-4 my-auto pl-1" />
          </div>
          ویرایش
        </button>
        <button
          onClick={showModal}
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          type="button"
          className="inline-flex bg-white items-center px-4 py-2 text-xs font-semibold text-[#B02626] text-nowrap  border border-[#E0E0E0] rounded-e-[50px]  "
        >
          <RiDeleteBin6Line className=" w-4 h-4 ml-1 my-auto" />
          حذف محصول
        </button>
      </div>
      {showDeleteModal ? (
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
                  آیا از حذف این محصول اطمینان دارید؟
                </h3>
                <a href="/">
                  <button
                    onClick={deleteProductHandler}
                    type="button"
                    className=" bg-[#B02626] rounded-[40px] w-[145px]  text-white font-medium text-lg h-12"
                  >
                    بله، حذف کن
                  </button>
                </a>
                <button
                  onClick={hideModal}
                  type="button"
                  className="py-2.5 px-5 ms-3  text-black  bg-[#E5E5E5] rounded-[40px] font-semibold text-base w-[98px] h-12 focus:z-10 focus:ring-4"
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {opnEdit ? (
        <div className=" pt-[90px]  backdrop-brightness-50 m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  md:inset-0 h-full max-h-full">
          <div
            dir="rtl"
            className=" max-w-[650px] h-[644px] m-auto bg-white  rounded-[20px] "
          >
            <h1 className=" font-bold text-lg text-black bottom-[-15] pt-6 pr-6">
              ویرایش محصول
            </h1>
            <Divider className=" bg-[#E0E0E0]" />
            <Form
              dir="rtl"
              name="edit-product"
              onFinish={onFinish}
              style={{ maxWidth: 602 }}
              scrollToFirstError
              className=" mx-auto overflow-hidden max-sm:px-4 "
            >
              <p>عنوان فارسی محصول</p>
              <Form.Item
                name={"title"}
                className="max-w-[602px]  "

              >
                {/* <label className="text-[#A0A0B3]   text-xs font-medium  ">
            عنوان محصول
          </label> */}
                <Input  className=" mb-2  rounded-lg max-w-[602px] mt-1 h-14  text-black  " defaultValue={title} />
              </Form.Item>
              <p>عنوان انگلیسی</p>

              <Form.Item
                name={"category"}
                className="max-w-[602px]  "
              >
                {/* <label className="text-[#A0A0B3]   text-xs font-medium   ">
            عنوان انگلیسی محصول
          </label> */}

                <Input defaultValue={title} className=" rounded-lg max-w-[602px]  h-14 text-black mt-1" />
              </Form.Item>
              {/* <div className=" flex justify-between  "> */}
              <div className="flex justify-around">
                <div>
                  <p>قیمت اصلی محصل</p>
                  <Form.Item
                    className="max-w-[602px]"
                    name={"price"}
                  >
                    <InputNumber defaultValue={price.toLocaleString('fa')} className=" rounded-lg w-[291px]  max-sm:w-[250px] text-right align-middle  h-14 text-black mt-1 pt-3" />
                  </Form.Item>
                </div>
                <div>
                  <p>تعداد موجود</p>
                  <Form.Item
                    className="max-w-[602px]  "
                    name={"image"}
                  >
                    <InputNumber defaultValue={price.toLocaleString('fa')} className=" rounded-lg w-[291px] max-sm:w-[250px]  text-right  h-14 text-black mt-1 pt-3" />
                  </Form.Item>
                </div>
              </div>
              <p>توضیحات</p>
              <Form.Item
                name={"description"}
                className="w-[100%] "
              >
                <Input.TextArea autoSize={{ minRows: 4, maxRows: 3} } defaultValue={description}
                />
              </Form.Item>
              <div className="flex max-sm:pr-2 ">
                <Form.Item>
                  <button className=" w-[133px] h-12 rounded-[40px] text-white bg-[#1A43D3] ">
                    ثبت تغییرات
                  </button>
                </Form.Item>
                <Form.Item>
                  <button
                    type="button"
                    onClick={hideEditForm}
                    className="py-2.5 px-5 ms-3  text-black  bg-[#E5E5E5] rounded-[40px] font-medium  text-base w-[98px] h-12"
                  >
                    انصراف
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductEditor;
