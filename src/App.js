import './App.css';
import Projects from './Projects.js'
import About from './About.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectLightRemote from './ProjectLightRemote';
import ProjectCryptography from './ProjectCryptography';

function App() {
  return (
    <div className="App" class="font-sans text-gray-700">

      <div class="mx-auto pt-10 p-10 space-y-3 max-w-4xl text-left">
        <div class="text-4xl font-medium">
          scott ng
        </div>
        <div>
          software developer
        </div>
        <div>
          email: scottng at scottng dot com
        </div>
        <div>
          <img src="/images/IMG_4819.GIF" alt="cat birthday" />
        </div>
          
      </div>

      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <About />
              <Projects />
            </Route>

            <Route path="/projects/lightremote">
              <ProjectLightRemote />
            </Route>  

            <Route path="/projects/cryptography-with-go">
              <ProjectCryptography />
            </Route> 

          </Switch> 
        </div>
        
      </Router> */}
      

    </div>
  );
}

export default App;
