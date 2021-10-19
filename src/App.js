import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Login/Login/Login";

import Services from "./Component/Home/Services/Services";
import Doctors from "./Component/Home/Doctors/Doctors";
import Register from "./Component/Home/Register/Register";

import AuthProvider from "./Context/AuthProvider";
import useAuth from "../src/hooks/useAuth";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import BuyNow from "./Component/Home/BuyNow/BuyNow";
import Meet from "./Component/Home/Meet/Meet";
import Error from "./Component/Home/Error/Error";
import AboutUs from "./Component/Home/About us/AboutUs";
function App() {
  const user = useAuth();
  console.log(user);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>
            <Route path="/service">
              <Services></Services>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/meet">
              <Meet></Meet>
            </PrivateRoute>
            <PrivateRoute path="/buy">
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route to="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
