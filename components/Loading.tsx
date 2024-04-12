import React from 'react'


import { Flex, Skeleton, Space, Spin } from 'antd'



const Loading = () => {
  return (
    <Flex gap="small" vertical>
    
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>

  </Flex>
  )
}

export default Loading