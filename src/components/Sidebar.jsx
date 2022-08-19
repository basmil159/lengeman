import { Svgs } from "./Svgs";
import { Link } from "react-router-dom";
import { useState } from "react";
/**
 * @NavLinks receives two props, title and icon
 * using template literal, we concatenate props.icon with svg's link to retrieve desired icon
 */
const NavLinks = (props) => { 
  const title=props.title;
  if (title === "Collapse") {
    return (
     <li className="heading-secondary nav-element" onClick={
      ()=>{
        if (props.state) {
          props.collapse(false);
          document.getElementById("sidebar").style.width = "8rem";
          // document.getElementById("sidebar").style.borderRadius = "50px";   
          document.getElementById("Collapse").removeAttribute("rotate", "1");        
          document.getElementById("logo").setAttribute("collapse", "1");
          document.querySelectorAll(".nav-element").forEach(element => {element.style.justifyContent="center";});
          
        } else {
          props.collapse(true);      
          document.getElementById("sidebar").style.width = "20rem"; 
          // document.getElementById("sidebar").style.borderRadius = "10px";    
          document.getElementById("logo").removeAttribute("collapse", "1"); 
          document.getElementById("Collapse").setAttribute("rotate", "1");   
          document.querySelectorAll(".nav-element").forEach(element => {
            element.style.justifyContent="left";
            element.style.width="calc(100% - 0rem )";
          });
      
        }


      }
     } >
      <Link className="navigation__nav--elements" id={props.title} to={props.NavLinks} style={{width: "auto"}}>
          <Svgs icon={props.icon} title={`small-svg ${props.title}`} />
          {props.state && <span className="navigation__nav--hide-on-tab ">{props.title}</span>}
          
        </Link>
      </li>
    );
  }else{
    return (
      <li className="heading-secondary nav-element">
       <Link className="navigation__nav--elements" to={props.NavLinks}>
           <Svgs icon={props.icon} title={`small-svg ${props.title}`} />
           {props.state && <span className="navigation__nav--hide-on-tab ">{props.title}</span>}
         </Link>
       </li>
     );
  }
 
};



export const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <section id="sidebar" className="sidebar">
      
      <a href="/lengeman" className="sidebar__logo-box">
        
      <h1 className="sidebar__logo" id="logo" collapse="1">BlackBox</h1>
      {/* {openNav && <h1 className="sidebar__logo" id="logo-big">BlackBox</h1>} */}
      {/* {!openNav && <h1 className="sidebar__logo sidebar__logo--small" id="logo-small">B</h1>} */}
      </a>
        <div className="line"></div>
      <div id="navigation" className="navigation">
        <ul className="navigation__nav">
          <NavLinks icon="work" title="Jobs" NavLinks="/lengeman" state={openNav}/>
          <NavLinks icon="tool" title="Tool" NavLinks="/tools" state={openNav}/>
          <NavLinks icon="materials" title="Materials" NavLinks="/Materials" state={openNav}/>
          <div className="line"></div>
          <NavLinks icon="setting" title="Setting" NavLinks="/Setting" state={openNav}/>
          <NavLinks icon="log" title="Logs" NavLinks="/Logs" state={openNav}/>
          <div className="line"></div>
          <NavLinks icon="simulation" title="Simulation" NavLinks="/Logs" state={openNav}/>
          <NavLinks icon="collapse" title="Collapse" NavLinks="#" collapse={setOpenNav} state={openNav}/>
        </ul>
        
        
      </div>
    </section>
  );
};
