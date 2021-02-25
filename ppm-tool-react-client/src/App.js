import logo from './logo.svg';
import './App.css';

import DashBoard from './components/DashBoard';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './Project/AddProject';
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from './components/UpdateProject';


function App() {



  return (
    <Provider store={store}>
      <Router>    
        <div className="App">
            <Header/>

            <Route path="/addProject" component={AddProject}/>
            <Route path="/dashboard" component={DashBoard}/>
            <Route path="/updateProject/:id" component={UpdateProject}/>

          
        </div>
      </Router> 
      </Provider>
  );
}

export default App;
