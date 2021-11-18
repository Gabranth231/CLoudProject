import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className={classes.navBar}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Screen</Link>
                    </li>
                    <li>
                        <Link to="/NewPage">New Page</Link>
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