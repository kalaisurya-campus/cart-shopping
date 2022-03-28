import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Homepage/Home";
import CartHomepage from "./components/carthomepage/CartHomepage";
import Cart from "./components/cart/Cart";
import Address from "./components/addresspage/Address";
import OrderDate from "./components/oderpagesoverall/OrderDate";
import Login from "./components/login/Login";
import Signup from "./components/signups/Signup";
import ForgetPassword from "./components/forgetpassword/ForgetPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import Navbar from "./components/navbar/Navbar";
import ScrollParallaxs from "./components/parallaxpage/ScrollParallaxs";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/carthome/:name" component={CartHomepage} />
                    <Route path="/cartde" component={Cart} />
                    <Route path="/address" component={Address} />
                    <Route path="/orders" component={OrderDate} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forgetpassword" component={ForgetPassword} />
                    <Route path="/resetpassword" component={ResetPassword} />
                    <Route path="/scrollparallax" component={ScrollParallaxs} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
