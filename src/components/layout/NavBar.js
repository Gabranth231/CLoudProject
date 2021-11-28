import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [dropDown, setDropDown] = useState(false);
    
    let menuPopup = null;
    if(dropDown === true) {
        menuPopup = (
            <div className={classes.dropdownContent} onMouseLeave={hideMenu}>
                <Link to="/CataloguePage">Catalogue</Link>
                <Link to="/CartPage">Cart</Link>
            </div>
        );
    }   

    function hideMenu() {
        setDropDown(false);
    }

    return (
        <header className={classes.navBar}>
            <nav>
                <ul>
                    <li className={classes.homeButton}>
                        <Link to="/">Home Screen</Link>
                    </li>
                    <li className={classes.dropdownButton}>
                        <div onMouseEnter={()=>setDropDown(true)} onMouseLeave={hideMenu}>Pages</div>
                        {menuPopup}
                    </li>
                </ul>
            </nav>
            <Link className={classes.counter} to="/CartPage">
                <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" alt=""></img>
                <div>
                    0
                </div>
            </Link>
        </header>
    );
}
export default NavBar;

