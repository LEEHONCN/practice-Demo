import React, { useState, useEffect } from "react"
import { Menu, Layout } from 'antd';
import { navMenuData, navMenuDataMap } from "./NavMenuData";
import DropdownMenu from './DropdownMenu';
// import './index.less'
import { 
  Logo,
  LayoutHeader,
  NavMenu,
  Center,
  DropdownLink,
  DropdownDiv,
  DropdownItem,
  DropdownTitle,
  DropdownContent,
  LoginButton,
  SigninButton,
  HeaderRight
} from './style';

const Header = (props) => {
  const [isCollapse, setCollapse] = useState(false);

  useEffect(() => {
    function scrollHandler(){
      document.documentElement.scrollTop > 0 ? setCollapse(true) : setCollapse(false);
    }
    props.collapse && window.addEventListener('scroll', scrollHandler);  
    return () => {
      props.collapse && window.removeEventListener('scroll', scrollHandler);
    }
  })

  function renderDropdown(menu) {
    return (
      <DropdownDiv>
        {
          menu.map((item) => 
            <DropdownItem>
              <DropdownTitle>{item.menuName}</DropdownTitle>
              {item.menuContent.map((name) => {
                return <DropdownContent href={navMenuDataMap[name]}>{name}</DropdownContent>;
              })}
            </DropdownItem>
          )
        }
      </DropdownDiv>
    );
  }

  return (
    <LayoutHeader style={ props.collapse ? (isCollapse ? { borderBottom : '1px solid #D8D8D8', position: 'fixed' } : { position: 'fixed' }) : {} }> 
      <Center>
        <Logo></Logo>
        <NavMenu>
          {
            navMenuData.map((item, index) => 
              <DropdownLink key={index} href={item.menu ? '' : navMenuDataMap[item.name]}>
                {item.name}
                {item.menu && renderDropdown(item.menu)}
              </DropdownLink>
            )
          }
        </NavMenu>
        <HeaderRight>
          <LoginButton type="link" href="/login">登录</LoginButton>
          <SigninButton>体验 Demo</SigninButton>
        </HeaderRight>
      

      </Center>
    </LayoutHeader>
  );
}

export default Header;
