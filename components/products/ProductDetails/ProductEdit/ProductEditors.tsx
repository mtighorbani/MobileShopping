"use client";

import React, { useState } from "react";


import DeleteModal from "./deleteProduct/DeleteModal";
import EditForm from "./editForm/EditForm";
import ProductEditsButton from "./ProductEditsButton";


const ProductEditor = ({ id, price, title, description }: any) => {

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [openEdit, setopnEdit] = useState(false);
  

  return (
    <div className=" absolute mt-5 mr-5">
    <ProductEditsButton setopnEdit={setopnEdit} setshowDeleteModal={setshowDeleteModal}/>


      {showDeleteModal ? <DeleteModal id={id} handleCancel={setshowDeleteModal} />:'' }


      {openEdit ? 

        <EditForm
          id={id}
          price={price}
          title={title}
          description={description}
          hideEditForm={setopnEdit}
        />
       :
       ""}

    </div>
  );
};

export default ProductEditor;
