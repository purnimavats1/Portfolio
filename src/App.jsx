
import styles from './App.module.css';
import {Hero} from "./components/hero/hero.jsx";
import  {Navbar}  from './components/navbar/navbar';
import {About} from "./components/about/about.jsx";
import { Skills } from './components/skills/skills.jsx';
import { Projects } from './components/projects/projects.jsx';
import { Contact } from './components/contact/contact.jsx';



function App() {


  return (
    <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>

    </div>
  )
}

export default App;

