import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Profile from '../components/Profile/Profile';



export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/login" exact render={(props) => <Login {...props}/>}/>
            <Route path="/profile" exact render={(props) => <Profile {...props}/>}/>
        </Switch>
    )
}
