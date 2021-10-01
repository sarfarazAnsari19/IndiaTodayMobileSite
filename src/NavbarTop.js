import React from 'react'

const NavbarTop = () => {
    return (
      // Header/Navbar 
      <div className="header_">
          <NavElemnet 
            divClass={"nav_menu_"}
            imgClass={"menu_"}
            imgAlt={"Menu"}
            imgSrc={"./assets/hamburger.png"}
          />  
          <NavElemnet 
            divClass={"nav_logo_"}
            imgClass={"logo_"}
            imgAlt={"Logo"}
            imgSrc={"./assets/logo.png"}
          /> 
          <NavElemnet 
            divClass={"nav_profile_"}
            imgClass={"profile_"}
            imgAlt={"Profile"}
            imgSrc={"./assets/profile.png"}
          /> 
      </div>
      // Header/Navbar End
    )
}

const NavElemnet = (props) =>  {
    const {divClass, imgClass,imgAlt, imgSrc} = props;
    return  (
      <div className={divClass}>
        <img src={imgSrc} alt={imgAlt} className={imgClass} />
      </div> 
    )
}

export default NavbarTop