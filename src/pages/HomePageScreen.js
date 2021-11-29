import classes from './HomePageScreen.module.css';
import { Link } from "react-router-dom";

function HomePageScreen() {
  return (
    <div className={classes.mainDiv}>
        <h1>Welcome to shopping</h1>
        <div className={classes.sections}>
          <Link to="/CataloguePage">
            <img className={classes.img} src="https://www.shannonspringshotel.com/wp-content/uploads/2020/06/shopping-shannon-springs-2.jpg"></img>
            Catalogue
          </Link>
          <Link to="/CartPage">
            <img className={classes.img} src="https://www.incimages.com/uploaded_files/image/1920x1080/shopping-cart-pano_13213.jpg"></img>
            Cart
          </Link>
        </div>
    </div>
  );
}

export default HomePageScreen;
