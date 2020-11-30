import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav from 'react-simple-sidenav';
import { navItems } from '../../utils/items';

const Sidebar = (props) => {
  
  const items = navItems.items.map((item, index)=>(
    <div key={index}>
      <Link to={item.url} onClick={props.setHideSidebar}>
        <p className="pl-4 pt-2"> <i className={item.icon}></i> {item.title}</p>
      </Link>
    </div>
  ))
  const admin = navItems.admin.map((item, index)=>(
    <div key={index}>
      <Link to={item.url} onClick={props.setHideSidebar}>
        <p className="pl-4 pt-2"> <i className={item.icon}></i> {item.title}</p>
      </Link>
    </div>
  ))
  return (
    <SideNav
      showNav= {props.showNav}
      onHideNav ={props.setHideSidebar}
      titleStyle={{backgroundColor: '#2196F3'}}
      itemStyle={{backgroundColor: 'black'}}
    >
      {items}
      <p className="pt-4 pl-5">Admin options</p>
      <div className="dropdown-divider"></div>
      {admin}
    </SideNav>
  );
};

export default Sidebar;