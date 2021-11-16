import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul className={classes.navBar}>
                <div>
                    <Link to="/">Home Screen</Link>
                </div>
                <div>
                    <Link to="/NewPage">New Page</Link>
                </div>
            </ul>
        </nav>
    );
}
export default NavBar;