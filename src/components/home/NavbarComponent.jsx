import { useState } from 'react';
import { Link, Route } from "react-router-dom";

//Component
const NavbarItem = ({ routeTo, routeName }) => (
    <Link className="navbar-item is-capitalized" to={routeTo}>
        {routeName}
    </Link>
);

const NavBarMenuItem = ({ routeTo, routeName }) =>{
    return <Link className="navbar-item is-capitalized" to={routeTo}>
        {routeName}
    </Link>
}

const renderOpts = ( optsArr ) => {   

    return optsArr.map((x,i) => {
        
        const {rName, to, type, extraOpts} = x;
        
        if(type === "opt"){
            return <NavbarItem key={i} routeTo={to} routeName={rName}/>
        }else{
            return <NavBarMenuItem key={i} routeTo={to} routeName={rName} extraOpts={extraOpts}/>
        }

    });

}
  
const NavBar = ({ items }) => {

    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const {rName, to} = items[0];


    return(
        <nav className="navbar is-black">
            
            {/* NavBar Brand -> starting part of nav */}
            <div className="navbar-brand">
                
                <NavbarItem routeTo={to} routeName={rName}/>
                <div className={activeBurgerMenu ? "navbar-burger is-active" : "navbar-burger"} 
                aria-label="menu" aria-expanded="false" onClick={() => setActiveBurgerMenu(!activeBurgerMenu)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            
            </div>

            {/* Sub Sequent part of nav - 1*/}
            <div className={`${activeBurgerMenu ? "navbar-menu is-active" : "navbar-menu"}`} 
            style={activeBurgerMenu ? {display:'flex'} : {display:'flex', justifyContent:'flex-end'}}>
                <div className="navbar-item field">
                    <input className="input" type="search" placeholder="Search..."/>
                </div>
            </div>

            {/* Sub Sequent part of nav - 2*/}
            <div className={`${activeBurgerMenu ? "navbar-menu is-active" : "navbar-menu navbar-end"}`}>
                {renderOpts(items)}
            </div>


      </nav>
    );

}



export { NavBar };