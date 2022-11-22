import './App.css';
import Header from "./COmponent/Header";
import Home from "./COmponent/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Checkout from "./COmponent/Checkout";

function App() {
    return <Router>
        <div className='APP'>
            <Switch>
                <Route exact path='/'>
                    <Header></Header>
                    <Home></Home>
                </Route>

                <Route path='/checkout'>
                    <Header/>
                   <Checkout></Checkout>
                </Route>
            </Switch>
        </div>
    </Router>
        ;
}

export default App;
