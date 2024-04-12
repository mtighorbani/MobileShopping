import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Divider, Form, Input, InputNumber } from "antd";


import { editModal } from "@/public/texts/string";
import { EditProductCommand } from "@/types/types";



const EditForm = ({ id, price, title, description, hideEditForm }: any) => {


  const { mutate: mutateProductEdit, isPending: pendingProductEdit } =
    useMutation({
      mutationFn: async (data: EditProductCommand) =>
        (
          await axios.put<EditProductCommand>(
            `${process.env.NEXT_PUBLIC_API_ADD_PRODUCT}${id}`,
            data
          )
        ).data,
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
    <div className=" pt-[90px]  backdrop-brightness-50 m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  md:inset-0 h-full max-h-full">
      <div
        dir="rtl"
        className=" max-w-[650px] h-[644px] m-auto bg-white  rounded-[20px] "
      >
        <h1 className=" font-bold text-lg text-black bottom-[-15] pt-6 pr-6">
          {editModal.title}
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
          <p>{editModal.persianProductTitle}</p>
          <Form.Item name={"title"} className="max-w-[602px]  ">
            <Input
              className=" mb-2  rounded-lg max-w-[602px] mt-1 h-14  text-black  "
              defaultValue={title}
            />
          </Form.Item>
          <p>{editModal.englishProductTitle}</p>

          <Form.Item name={"category"} className="max-w-[602px]  ">
            <Input
              defaultValue={title}
              className=" rounded-lg max-w-[602px]  h-14 text-black mt-1"
            />
          </Form.Item>
          <div className="flex justify-around">
            <div>
              <p>{editModal.amount}</p>
              <Form.Item className="max-w-[602px]" name={"price"}>
                <InputNumber
                  defaultValue={price.toLocaleString("fa")}
                  className=" rounded-lg w-[291px]  max-sm:w-[250px] text-right align-middle  h-14 text-black mt-1 pt-3"
                />
              </Form.Item>
            </div>
            <div>
              <p>{editModal.availCount}</p>
              <Form.Item className="max-w-[602px]  " name={"image"}>
                <InputNumber
                  defaultValue={price.toLocaleString("fa")}
                  className=" rounded-lg w-[291px] max-sm:w-[250px]  text-right  h-14 text-black mt-1 pt-3"
                />
              </Form.Item>
            </div>
          </div>
          <p>{editModal.description}</p>
          <Form.Item name={"description"} className="w-[100%] ">
            <Input.TextArea
              autoSize={{ minRows: 4, maxRows: 3 }}
              defaultValue={description}
            />
          </Form.Item>
          <div className="flex max-sm:pr-2 ">
            <Form.Item>
              <button className=" w-[133px] h-12 rounded-[40px] text-white bg-[#1A43D3] ">
                {editModal.confirm}
              </button>
            </Form.Item>
            <Form.Item>
              <button
                type="button"
                onClick={() => hideEditForm(false)}
                className="py-2.5 px-5 ms-3  text-black  bg-[#E5E5E5] rounded-[40px] font-medium  text-base w-[98px] h-12"
              >
                {editModal.cancel}
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditForm;
