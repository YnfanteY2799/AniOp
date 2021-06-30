import { NavBar } from "./components/home/NavbarComponent";
import { HashRouter, Switch, Route } from "react-router-dom";
import PublicOpeningsGetter from "./components/public/PublicOpeningsGetter";
import Login from "./components/user/LogIn";
import { SignIn } from "./components/user/SignIn";

const routes = [
  {type:"title", to:"/", rName:"AnimeOpe",component:null},
  {type:"opt", to:"/Public/Search/Random", rName:"Random",component:PublicOpeningsGetter},
  {type:"opt", to:"/singIn", rName:"Sign In",component:SignIn},
  {type:"opt", to:"/login", rName:"Log-In",component:Login},

];

const App = () =>{
  return(
    <HashRouter>
      <div>
        <NavBar items={routes}/>
        <Switch>
          {routes.map((xe,i) => 
            xe.component !== null && 
            <Route key={i} path={xe.to} exact={true}>{<xe.component/>}</Route>
          )}
        </Switch>
      </div>  
    </HashRouter>
  );
}

export default App;