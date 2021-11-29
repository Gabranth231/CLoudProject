import { Route, Switch } from "react-router-dom";
import {useState } from "react";
import NavBar from './components/layout/NavBar';
import HomePageScreen from './pages/HomePageScreen';
import CataloguePage from "./pages/CataloguePage";
import CartPage from "./pages/CartPage";
import classes from "./App.module.css";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [num, setNum] = useState(0);

  const globalObject = {
    setNum: function (newNum) {
      setNum(newNum);
    },
    getNum: function () {
      return num;
    },
    refreshApp: function () {
      setRefresh(() => {
        return !refresh;
      });
    },
  };

  return (
    <div className={classes.backgroundDiv}>
      <NavBar globalObject={globalObject}/>
      <Switch>
        <Route path="/" exact>
         <HomePageScreen />
        </Route>  
        <Route path="/CataloguePage" exact>
         <CataloguePage globalObject={globalObject}/>
        </Route>  
        <Route path="/CartPage" exact>
         <CartPage globalObject={globalObject}/>
        </Route>  
      </Switch>
    </div>
  );
}

export default App;