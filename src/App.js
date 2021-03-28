import { ReactComponent as Jason } from "./src/svg/jason.svg"; 
import { ReactComponent as Katana } from "./src/svg/katana.svg"; 
import { ReactComponent as Banner } from "./src/svg/knight-banner.svg"; 
import { ReactComponent as User } from "./src/svg/Kame-sennin_mark.svg"; 
import { ReactComponent as AnimeTitleTest } from "./src/svg/cutter-svgrepo-com.svg"; 
import { Navbar } from "./components/home/NavbarComponent";

const App = () =>{
  const renderer = [
    {icon:<Jason/>,child:null, ref:"#"},
    {icon:<Katana/>,child:null, ref:"#"},
    {icon:<Banner/>,child:null, ref:"#"},
  ];

  const baseTitle = {
    title:"AniOp",
    description:"Anime opening Site",
    href:"#",
    icon:<AnimeTitleTest/>
  }

  return(
    <div>
        <Navbar title={baseTitle} renderer={renderer}/>
    </div>  
  );
}

export default App;