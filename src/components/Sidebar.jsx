import { Svgs } from "./Svgs";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../img/blackbox.png';
/**
 * @NavLinks receives two props, title and icon
 * using template literal, we concatenate props.icon with svg's link to retrieve desired icon
 */
const NavLinks = (props) => { 
  // const title=props.title;
  
    return (
      <li className="heading-secondary nav-element">
       <Link className="navigation__nav--elements" to={props.NavLinks}>
           <Svgs icon={props.icon} title={`small-svg ${props.title}`} />
           {props.state && <span className="navigation__nav--hide-on-tab ">{props.title}</span>}
         </Link>
       </li>
     );
  };



export const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleMenu = () => {
    document.querySelector('.toggle').classList.toggle('active');
    document.getElementById("logo").toggleAttribute("collapse");
    if (openNav) {
      setOpenNav(false);
      document.getElementById("sidebar").style.width = "8rem";
      document.querySelectorAll(".nav-element").forEach(element => {
        element.style.justifyContent="center";
      });
      
    } else {
      setOpenNav(true);      
      document.getElementById("sidebar").style.width = "20rem"; 
      // document.querySelector(".nav-element").style.cssText='justifyContent: left; width: calc(100% - 0rem )';
      document.querySelectorAll(".nav-element").forEach(element => {
        element.style.justifyContent="left";
        element.style.width="calc(100% - 0rem )";
      });
      document.querySelectorAll(".wrapper__body").forEach(element => {
        element.style.marginLeft="2rem";
      });
  
    }
  };
  return (
    <section id="sidebar" className="sidebar">
      
      <a href="/lengeman" className="sidebar__logo-box">
        
      <h1 className="sidebar__logo" id="logo" collapse="1">Lengeman</h1>
      <div className="sidebar__logo--blackbox">
        <img src={logo} width="28" height="28"  alt="BLACKBOX"/>
        <span>BlackBOX</span>
      </div>
      
      </a>
      <div class="toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </div>
      <div id="navigation" className="navigation">
        <ul className="navigation__nav">
          <NavLinks icon="work" title="Jobs" NavLinks="/lengeman" state={openNav}/>
          <NavLinks icon="tool" title="Tool" NavLinks="/tools" state={openNav}/>
          <NavLinks icon="materials" title="Materials" NavLinks="/Materials" state={openNav}/>
          <NavLinks icon="setting" title="Setting" NavLinks="/Setting" state={openNav}/>
          <NavLinks icon="log" title="Logs" NavLinks="/Logs" state={openNav}/>
          <NavLinks icon="simulation" title="Simulation" NavLinks="/Logs" state={openNav}/>
          <NavLinks icon="collapse" title="Site Setting" NavLinks="#" state={openNav}/>
        </ul>
        
        
      </div>
    </section>
  );
};
