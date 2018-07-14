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
        setTimeout(()=>{
            this.setState({
                logout : true,
            })
        },500);
    }

    async componentDidMount(){
        API.session.logOut()
            .then(()=>{
                this.setLogoutState();
            })
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