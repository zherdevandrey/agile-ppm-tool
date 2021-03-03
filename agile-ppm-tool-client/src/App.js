import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/AddProject";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Route exact path="/dashboard" component = {Dashboard}></Route>
                <Route exact path="/addProject" component = {AddProject}></Route>
            </Router>

        </div>
    );
}

export default App;
