import React from 'react';
import { Redirect } from 'react-router-dom';
import {API} from "../../../../modules/api";

class LogoutPage extends React.Component{
    componentDidMount(){
        API.session.logOut();
    }

    render(){
        return (
            <Redirect to={"/"}/>
        );
    }
}

export default LogoutPage;