import React from "react";
import Users from "./layouts/users.jsx";
import NavBar from "./components/ui/navBar.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./layouts/main.jsx";
import Login from "./layouts/login.jsx";
import NotFound from "./components/not-found.jsx";
import { ProfessionProvider } from "./hooks/useProfession.jsx";
import { QualitiesProvider } from "./hooks/useQualities.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <QualitiesProvider>
                <ProfessionProvider>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/login/:type?" component={Login} />
                        <Route
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />
                        <Route to="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </ProfessionProvider>
            </QualitiesProvider>
            <ToastContainer />
        </>
    );
};

export default App;
