import React from "react"
import Header from '../Header';
import { Layout } from 'antd';

const AllLayout = (props) => (
  <Layout>
    <Header collapse={props.collapse} ></Header>
    <Layout.Content style={ props.collapse ? { marginTop: '74px'} : {}}>
      { props.children }
    </Layout.Content>
    <Layout.Footer>
    </Layout.Footer>
  </Layout>
);


export default AllLayout