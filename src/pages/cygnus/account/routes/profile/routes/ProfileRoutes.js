import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import {Profile} from "../components/Profile/Profile";
import {withBreadcrumb} from "../../../../../../components";
import {profileActions} from "../modules/profile";

class ProfileRoutes extends React.Component {
    componentDidMount(){
        this.props.onFetchProfile();
    }

    render(){
        return (
            <Profile profile={this.props.profile} onUpdateProfile={this.props.onUpdateProfile}/>
        )
    }
}

export function createProfileRoutes(profileActions){
    const mapStateToProps = (state) => ({
        profile: state.session.user,
    });
    const mapDispatchToProps = {
        onFetchProfile : profileActions.fetch,
        onUpdateProfile : profileActions.update,
    };
    return connect(mapStateToProps,mapDispatchToProps)(ProfileRoutes);
}

export default withBreadcrumb('Profile')(createProfileRoutes(profileActions));