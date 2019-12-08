import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const image = () => {
  return (
    <>
      <Head/>
      <Nav></Nav>
      <div>展示图片</div>
      <img src="/static/test.png" />
    </>
  );
}

export default image;