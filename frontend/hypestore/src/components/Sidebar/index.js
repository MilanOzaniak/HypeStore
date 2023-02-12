import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
  } from './SidebarElements';

const Sidebar = ({isOpen, toogle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
        <Icon onClick={toogle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/shoes' onClick={toogle}>Shoes</SidebarLink>
                <SidebarLink to='/clothing' onClick={toogle}>Clothing</SidebarLink>
                <SidebarLink to='/accessories' onClick={toogle}>Accessories</SidebarLink>
                <SidebarLink to='/signup' onClick={toogle}>Sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/shoes'>signup</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;