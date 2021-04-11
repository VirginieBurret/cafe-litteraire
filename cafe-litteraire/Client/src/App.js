import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Homepage from './Components/Homepage';
import Board from './Components/Board';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Homepage />
           </Route>
          <Route path="/board">
            <Board />
          </Route>
          </Switch>
       
    </Router>
  );
}

export default App;
