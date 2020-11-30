import React, { useState } from 'react';
import SideBar from './SideBar/SideBar';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const setShowSidebar = () => {
    setShowNav(true)
  };
  const setHideSidebar= () => {
    setShowNav(false)
  };
  return (
    <>
    <nav className="navbar navbar-light navbar-1 white">
      <div style={{textAlign:'center', width:'100%'}}>
      <a className="navbar-brand" href="-">Navbar</a>
      </div>
        <button
          onClick={setShowSidebar}
          style={{position:'absolute'}}
          className="navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent15"
          aria-controls="navbarSupportedContent15"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
    </nav>
    <SideBar showNav={showNav} setHideSidebar={setHideSidebar} />
    </>
  )
};

export default Header;