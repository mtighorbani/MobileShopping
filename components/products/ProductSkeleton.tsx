import React from 'react'


import { Skeleton, Space } from 'antd'



const ProductSkeleton = () => {
  return (
        <div className="w-[315px] h-[422px] bg-white mb-5 ring-1 ring-[#E0E0E0]  rounded-lg pt-[25px] max-sm:mx-auto ">
            <Space className='w-[213px] h-[239px] mx-auto ' >
              <Skeleton.Image active  className='w-[213px] h-[239px] mx-auto ' />
            </Space>
          </div> 
  )
}

export default ProductSkeleton