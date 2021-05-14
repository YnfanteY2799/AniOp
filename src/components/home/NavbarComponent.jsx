import { useState } from 'react';
import { Link } from "react-router-dom";

//Component
const NavbarItem = ({ routeTo, routeName }) => (
    <Link className="navbar-item is-capitalized" to={routeTo}>
        {routeName}
    </Link>
);

// const NavBarMenuItem = ({ routeTo, routeName }) =>{
//     return <Link className="navbar-item is-capitalized" to={routeTo}>
//         {routeName}
//     </Link>
// }

const NavBarOptionsMenuItem = ({ routeName, extraOpts, }) =>{
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <b className="navbar-link">
            {routeName}
            </b>
            <div className="navbar-dropdown">
                {extraOpts.map((x,idx) => <Link key={idx} className="navbar-item" to={x.to}>{x.rName}</Link>)}
            </div>
        </div>
    );

}


const renderOpts = ( optsArr ) => {   

    return optsArr.map((x,i) => {
        
        const {rName, to, type, opts} = x;
        
        if(type === "opt"){
            return <NavbarItem key={i} routeTo={to} routeName={rName}/>
        }else if(type === "ddOpt"){
            return <NavBarOptionsMenuItem key={i} routeName={rName} extraOpts={opts}/>
        }else{
            return type !== "title" && <NavbarItem key={i} routeTo={to} routeName={rName}/>
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
            <div className={`navbar-menu`} 
            style={activeBurgerMenu ? {display:'flex'} : {display:'flex', justifyContent:'flex-end'}}>
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <input className="input" type="search" placeholder="Search..."/>
                    </div>
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