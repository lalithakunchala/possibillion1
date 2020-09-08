import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';



export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Register} />
            {/* <Route path="/admindashboard" exact render={(props) => <AdminDashboard {...props}/>}/> */}
        </Switch>
    )
}
