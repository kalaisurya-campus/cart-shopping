import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Homepage/Home";
import CartHomepage from "./components/carthomepage/CartHomepage";
import Cart from "./components/cart/Cart";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/carthome" component={CartHomepage}/>
                    <Route path="/cartde" component={Cart}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
