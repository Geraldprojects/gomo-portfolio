import React from "react";
import styled from "styled-components";
import { useState } from "react";
import OpenMenuIcon from "../assets/menu.svg";

export const Navigation = () => {

  const [openMenu, setOpenMenu] = useState(false);

 const toggleMenu = ()=>{
      setOpenMenu(!openMenu);
      console.log(openMenu);
 }
  const Menu = styled.div`
    width: 100%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0 40px 0;
    font-size: 13px;
  `;

  const MenuItems = styled.div`
    display: flex;
    list-style: none;
    align-items: center;
    li {
      margin-right: 40px;
      cursor: pointer;
    }

    li:nth-child(6) {
      border: 1px solid #000;
      padding: 0.5em;
      border-radius: 4px;
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  `;

  const MenuIcon = styled.img`
    width: 50px;
    height: 40px;
    margin: 15px;
    cursor: pointer;
   
    @media only screen and (min-width: 768px) {
      display: none;
    }
  `;

  return (
    <Menu>
      {" "}
      <div className="logo">Gomo</div>
      <MenuItems>
        <li><span>01.</span> Home</li>
        <li><span>02.</span> Experience</li>
        <li><span>03.</span> Work</li>
        <li><span>04.</span> About</li>
        <li><span>05.</span> Contact</li>
        <li>Resume</li>
      </MenuItems>
      <MenuIcon src={OpenMenuIcon} onClick={toggleMenu}/>
    </Menu>
  );
};
