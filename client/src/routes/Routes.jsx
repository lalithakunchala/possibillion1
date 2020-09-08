import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from '../components/Login/Login';



export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            {/* <Route path="/admindashboard" exact render={(props) => <AdminDashboard {...props}/>}/> */}
        </Switch>
    )
}
