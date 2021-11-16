import { Route, Switch } from "react-router-dom";
import NavBar from './components/layout/NavBar';
import HomePageScreen from './pages/HomePageScreen';
import NewPage from "./pages/NewPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
         <HomePageScreen />
        </Route>  
        <Route path="/NewPage" exact>
         <NewPage />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;