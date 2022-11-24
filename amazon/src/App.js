import './App.css';
import Header from "./COmponent/Header";
import Home from "./COmponent/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Checkout from "./COmponent/Checkout";
import Login from "./COmponent/Login";
import {useEffect} from "react";
import {auth} from "./firebase";
import {useStateValue} from "./COmponent/StateProvider";
import Payment from "./COmponent/payment";


function App() {
    const [{}, dispatch] = useStateValue();


    useEffect(() => {
            auth.onAuthStateChanged(authUser => {

                if (authUser) {
                    //유저가 방금 로그인하거나 이미 한상태
                    dispatch({
                        type: 'SET_USER',
                        user: authUser

                    })

                } else {
                    //사용자가 로그아웃 되었을때
                    dispatch({
                        type: 'SET_USER',
                        user: null
                    })
                }
            })


        }, []
    )


    return <Router>
        <div className='APP'>
            <Switch>
                <Route exact path='/login'>
                    <Login></Login>
                </Route>

                <Route exact path='/'>
                    <Header></Header>
                    <Home></Home>
                </Route>

                <Route path='/checkout'>
                    <Header/>
                    <Checkout></Checkout>
                </Route>

                <Route path='/payment'>
                    <Header/>
                    <Payment></Payment>
                </Route>
            </Switch>
        </div>
    </Router>
        ;
}

export default App;
