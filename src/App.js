import logo from './logo.svg';
import './App.css';
import './component/custom.css'
import Accepts from './component/input/Accepts.jsx'
import Outputs from './component/Outouts/Outputs.jsx';
import ListUser from './component/Outouts/ListUser.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import React, { useState } from 'react' 


function App() {
  //const [inputText, setTnputText] = useState("");
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListUser">List Details</Link>
            </li>
            <li>
              <Link to="/Outputs">Yahoo</Link>
            </li>
            <li>
              <Link to="/modus-create">Modus Create</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Accepts} exact />
            <Route exact path="/ListUser" component={ListUser} />
            <Route exact path="/Outputs" component={Outputs} />
            <Route exact path="/Outputs/:id" component={Outputs}/>
          </Switch>
        </div>
      </Router>
    </div>  
  );
}

export default App;
