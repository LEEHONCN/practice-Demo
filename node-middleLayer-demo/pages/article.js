import React, { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { Button } from 'antd';

const arcticle = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Head/>
      <Nav></Nav>
      <div>点击按钮使数字增加</div>
      <div>{count}</div>
      <Button type="primary" onClick={()=>{
        setCount(count + 1)
      }}>Primary</Button>
    </>
  );
}

export default arcticle;