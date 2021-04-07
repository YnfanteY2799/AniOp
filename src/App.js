import { NavBar } from "./components/home/NavbarComponent";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const routes = [
  {type:"title", to:"/", rName:"AnimeOpe"},
  {type:"opt", to:"/login", rName:"Log-In"},
];

const App = () =>{

  return(
    <Router>
      <div>
        <NavBar items={routes}/>
        <Switch>

    

        </Switch>
      </div>  
    </Router>
  );
}

export default App;