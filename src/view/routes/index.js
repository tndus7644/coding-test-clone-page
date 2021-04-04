import React from 'react';
import {Route, Switch} from "react-router-dom";
import Upload from "../pages/Upload";
import PageNavigate from "../pages/PageNavigate";
import List from "../pages/List";
import Login from "../pages/Login";
import Index from "../components/EmailForm";
import UploadList from "../pages/UploadList";

const Routes = () => {

    return(
        <Switch>
            <Route exact path={"/"} component={PageNavigate}/>
            <Route exact path={"/list"} component={List}/>
            <Route exact path={"/upload"} component={Upload}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/login/email"} component={Index}/>
            <Route exact path={"/upload/list"} component={UploadList}/>
        </Switch>
    )
}


export default Routes;