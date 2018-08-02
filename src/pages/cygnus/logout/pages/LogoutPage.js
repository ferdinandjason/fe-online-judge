import React from 'react';
import { Redirect } from 'react-router-dom';
import {API} from "../../../../modules/api";

class LogoutPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logout : false,
        };

        this.setLogoutState = this.setLogoutState.bind(this);
    }

    setLogoutState(){
        this.setState({
            logout : true,
        });
    }

    async componentDidMount(){
        API.sessionAPI.logOut()
            .then(()=>{
                this.setLogoutState();
                return Promise.resolve();
            });
    }

    render(){
        if(this.state.logout){
            return (
                <Redirect to={"/"}/>
            );
        }
        else{
            return null;
        }
    }
}

export default LogoutPage;