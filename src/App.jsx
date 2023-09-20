import React from "react";
import Users from "./layouts/users.jsx";
import NavBar from "./components/ui/navBar.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./layouts/main.jsx";
import Login from "./layouts/login.jsx";
import NotFound from "./components/not-found.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route to="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
};

export default App;
