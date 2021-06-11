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

      <Router>
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
        
      </Router>
      

    </div>
  );
}

export default App;
