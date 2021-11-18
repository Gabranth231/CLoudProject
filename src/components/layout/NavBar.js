import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className={classes.navBar}>
            <nav>
                <ul>
                    <li className={classes.homeButton}>
                        <Link to="/">Home Screen</Link>
                    </li>
                    <li className={classes.dropdown}>
                        <div className={classes.dropdownButton}>Pages</div>
                        <div class={classes.dropdownContent}>
                            <Link to="/CataloguePage">Catalogue</Link>
                            <Link to="/CartPage">Cart</Link>
                        </div>
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