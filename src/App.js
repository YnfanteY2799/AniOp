import { NavBar } from "./components/home/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicOpeningsGetter from "./components/public/PublicOpeningsGetter";
import Login from "./components/user/LogIn";
import { SignIn } from "./components/user/SignIn";

const routes = [
  {type:"title", to:"/", rName:"AnimeOpe",component:null},
  {type:"opt", to:"/login", rName:"Log-In",component:Login},
  {type:"opt", to:"/singIn", rName:"Sign In",component:SignIn},
  {type:"opt", to:"/Public/Search", rName:"Opening",component:PublicOpeningsGetter},
];



const App = () =>{
  return(
    <Router>
      <div>
        <NavBar items={routes}/>
        <Switch>
          {routes.map(xe => 
            xe.component !== null && 
            <Route path={xe.to} exact>{<xe.component/>}</Route>
          )}
        </Switch>
      </div>  
    </Router>
  );
}

export default App;