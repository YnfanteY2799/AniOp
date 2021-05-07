import { NavBar } from "./components/home/NavbarComponent";
import { HashRouter, Switch, Route } from "react-router-dom";
import PublicOpeningsGetter from "./components/public/PublicOpeningsGetter";
import Login from "./components/user/LogIn";
import { SignIn } from "./components/user/SignIn";

const routes = [
  {type:"title", to:"/", rName:"AnimeOpe",component:null},
  {type:"opt", to:"/login", rName:"Log-In",component:Login},
  {type:"opt", to:"/singIn", rName:"Sign In",component:SignIn},
  {type:"opt", to:"/Public/Search/Random", rName:"Random",component:PublicOpeningsGetter},
  {type:"ddOpt", to:null, rName:"About", component:null, opts:[
    {to:"/About/login", rName:"Log-In",component:Login},
    {to:"/About/singIn", rName:"Sign In",component:SignIn},
  ]},

];



const App = () =>{
  return(
    <HashRouter>
      <div>
        <NavBar items={routes}/>
        <Switch>
          {routes.map(xe => 
            xe.component !== null && 
            <Route path={xe.to} exact={true}>{<xe.component/>}</Route>
          )}
        </Switch>
      </div>  
    </HashRouter>
  );
}

export default App;