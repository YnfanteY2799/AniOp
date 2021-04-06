import { NavBar } from "./components/home/NavbarComponent";

const titleProps = {

  altName:"AniOpe",
  route:"/"
};


const App = () =>{

  return(
    <div>
    
      <NavBar 
      titleObject={titleProps}
      items={["Log In", "Sign Up", "Help"]}
      />
    
    </div>  
  );
}

export default App;