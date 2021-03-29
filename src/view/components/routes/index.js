import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home";
import List from "../../pages/List";
import Upload from "../../pages/Upload";
import MyList from "../../pages/Mylist";
import PageNavigate from "../../pages/PageNavigate";

const Routes = () => {

    return(
        <Switch>
            <Route exact path={"/"} component={PageNavigate}/>
            <Route exact path={"/home"} component={Home}/>
            <Route exact path={"/list"} component={List}/>
            <Route exact path={"/upload"} component={Upload}/>
            <Route exact path={"/mylist"} component={MyList}/>
        </Switch>
    )
}


export default Routes;