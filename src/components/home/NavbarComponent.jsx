import { useState } from 'react';

//Component
const NavbarItem = ({compName, compRoute}) => (
    <a className="navbar-item is-capitalized" href={`${compRoute}`}>{compName}</a>
);

const NavBarMenuItem = ({compName, }) =>{



}

const renderOpts = (optsArr) => {   

    return optsArr.map(x => {
    
        return typeof(x) === 'object' ? 
        <NavBarMenuItem /> :
        <NavbarItem compRoute={x} compName={x}/>

    });

}
  
// const navbarItems = [].map(page => <NavbarItem page={page} key={page} />);

const NavBar = ({titleObject, items}) => {

    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const {altName, route} = titleObject;

    return(
        <nav className="navbar is-black">
            
            {/* NavBar Brand -> starting part of nav */}
            <div className="navbar-brand">
                
                <NavbarItem compName={altName} compRoute={route}/>
                
                <a className={activeBurgerMenu ? "navbar-burger is-active" : "navbar-burger"} 
                aria-label="menu" 
                aria-expanded="false"
                onClick={() => setActiveBurgerMenu(!activeBurgerMenu)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* Sub Sequent part of nav */}
            <div className={`${activeBurgerMenu ? "navbar-menu is-active" : "navbar-menu navbar-end"}`}>
                {renderOpts(items)}
            </div>


      </nav>
    );

}



export { NavBar };