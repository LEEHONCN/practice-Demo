import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import axios from 'axios'

const Home = ({ content }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div> { content }</div>
  </div>
)

Home.getInitialProps = ({res}) => {
  return { content: res.data };
}

export default Home
