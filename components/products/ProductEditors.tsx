"use client";

import React, { useState } from "react";


import DeleteModal from "./deleteProduct/DeleteModal";
import EditForm from "./editProducts/EditForm";
import ProductEditsButton from "./ProductEditsButton";


const ProductEditor = ({ id, price, title, description }: any) => {

  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [openEdit, setopnEdit] = useState(false);
  

  return (
      <>
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

    </>
  );
};

export default ProductEditor;
