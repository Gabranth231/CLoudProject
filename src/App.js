import { Route, Switch } from "react-router-dom";
import NavBar from './components/layout/NavBar';
import HomePageScreen from './pages/HomePageScreen';
import CataloguePage from "./pages/CataloguePage";
import CartPage from "./pages/CartPage";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.backgroundDiv}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
         <HomePageScreen />
        </Route>  
        <Route path="/CataloguePage" exact>
         <CataloguePage />
        </Route>  
        <Route path="/CartPage" exact>
         <CartPage />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;