import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/AddProject";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
    return (
        <div className="App">
            {/*<Provider store> — позволяет создавать обёртку для React-приложения и делать состояние Redux доступным для всех компонентов-контейнеров в его иерархии.*/}
            <Provider store={store}>
                <Router>
                    <Header/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/addProject" component={AddProject}/>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
