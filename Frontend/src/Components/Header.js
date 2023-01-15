import React, {useState, useEffect, useRef} from 'react';
import './css/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
            });
    
        
        return (
            <header id="HeaderL1">
                <a id="logo" href="/">CashApp</a>
                <div className="menuBarBtn" ref={menuRef}>
                    <p>MENU</p>
                    <img src={require("./css/svg/MenuIcon.jpg")} alt="MenuIcon" onClick={()=>{setOpen(!open)}}></img>
                </div>
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <ul>
                        <DropdownItem  text = {"Login"} link="/login">
                        
                          
                        </DropdownItem>
                        <DropdownItem  text = {"Register"} link="/register">
                     
                        </DropdownItem>
                        <DropdownItem  text = {"Home"} link="/"  >
                        
                        </DropdownItem>
                    </ul>
                </div>
            </header>
            
        );

}


function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <NavLink className="inactive" activeClassName="active" to={props.link}> {props.text}  </NavLink>
      </li>
    );
  }
  

