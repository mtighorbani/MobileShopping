import React from 'react'


import { Flex, Spin } from 'antd'



const Loading = ({text}:any) => {
  return (
    <Flex gap="small" vertical>
    
      <Spin tip={text} size="large">
        <div className="content" />
      </Spin>

  </Flex>
  )
}

export default Loading