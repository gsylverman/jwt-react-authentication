import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from 'react-simple-sidenav';
import { navItems } from '../../utils/items';

const Sidebar = (props) => {
  const auth = useSelector(state => state.login.token);

  const items = navItems.items.map((item, index) => {
    if(!auth || !item.restricted){
      return (
        <div key={index}>
          <Link to={item.url} onClick={props.setHideSidebar}>
            <p className="pl-4 pt-2"> <i className={item.icon}></i> {item.title}</p>
          </Link>
        </div>
      )
    }
    return [];
  })
  const admin = navItems.admin.map((item, index) => {
    if(auth && item.restricted){
       return (
        <div key={index}>
          <Link to={item.url} onClick={props.setHideSidebar}>
            <p className="pl-4 pt-2"> <i className={item.icon}></i> {item.title}</p>
          </Link>
        </div>
      )
    }
  return [];
  })
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