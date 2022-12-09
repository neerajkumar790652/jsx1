import "./styles.css";
import Profile from './components/Profile'
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";


export default function App() {
  return (
    <div className="main">
     <Profile/>
     <hr className="hr"/>
     <Experience/>
     <hr className="hr"/>
     <Skills/>
     <hr className="hr"/>
     <Hobbies/>
    </div>
  );
}
