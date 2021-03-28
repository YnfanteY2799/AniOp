import { useState } from 'react';
import { CSSTransition } from "react-transition-group";

// Functions

const renderItems = ( items, key ) => {

    const { icon, child, link} = items;
    return (
        <NavItem icon={icon} link={link} key={key}>
            {child !== null && <OptionsPerMenu opts={child}/>}
        </NavItem>
    );

}

// Components
const Navbar = ({title , renderer }) =>{


    return(
        <div>
            <nav className="navBar">
                <ul className="navBar-nav-start" style={{position:'absolute'}}>
                    {title.title}
                    <input></input>
                </ul>
                <ul className="navBar-nav-end">
                    {renderer.map((x, i) => renderItems(x,i))}
                </ul>

            </nav>
        </div>
    );

}

// const Logo = ({logo, link}) => (<a href={link}>{logo}</a>);

const NavItem = ({icon, children, link}) =>{ 

    const [open,setOpen] = useState(false);

   return(
    <li className="nav-item">
        
        <a href={link} className="icon-button" onClick={()=> setOpen(!open)}>
            {icon}
        </a>

        {open && children}

    </li>
    );
};

const DdownMenu = ({children, activeMenu}) =>{

    return( 
        <div className="ddown">
            
            <CSSTransition in={activeMenu === 'main'} 
            unmountOnExit timeout={500} classNames="menu-primary">    
                <div className="menu">
                    {children}
                </div>
            </CSSTransition>

        </div>
    )

}

const DdownItem = ({ leftIcon, link, divName}) => {

    return(
        <a className="menu-item" href={link}>
            <span className="icon-left">{leftIcon}</span>
                {divName}
            <span className="icon-right"></span>
        </a>
    );
}

const OptionsPerMenu = ({opts}) =>{

    const [activeMenu, setActiveMenu] = useState('main');

    console.log(opts)

    return(
        <DdownMenu activeMenu={activeMenu}>
            {opts.map((x,i) => 
            
                <DdownItem key={i} 
                leftIcon={x.icon} 
                divName={x.name} 
                link={x.goToMenu === null ? x.route : null}
                onClick={x.goToMenu && setActiveMenu( )}
                />
            
            )}
        </DdownMenu>


    )

}


export { Navbar, NavItem };