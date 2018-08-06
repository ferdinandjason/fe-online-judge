import React from 'react';
import { Button, Intent, Classes } from '@blueprintjs/core';

import {CardContainer} from "../../../../../../../components";
import {ProfilePanel} from "../ProfilePanel/ProfilePanel";
import ProfileForm from "../ProfileForm/ProfileForm";

import Styles from './Profile.scss';

export class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false,
        }
    }

    render(){
        const action = this.state.edit ? (undefined) : (
            <Button
                text="Edit"
                intent={Intent.PRIMARY}
                className={Classes.SMALL}
                onClick={this.toggleEdit}
            />
        );

        return (
            <CardContainer title={"Profile"} action={action} className={Styles.CARD_PROFILE}>
                {this.renderContent()}
            </CardContainer>
        )
    }

    renderContent = () => {
        const { profile } = this.props;
        if(this.state.edit){
            const onCancel = { onCancel: this.toggleEdit };
            return <ProfileForm onSubmit={this.onSave} profile={profile} {...onCancel}/>
        } else {
            return <ProfilePanel profile={profile}/>
        }
    };

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit,
        })
    };

    onSave = async () => {
        await this.props.onUpdateProfile();
        this.setState({edit:false});
    }
}