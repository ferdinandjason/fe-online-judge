import React from 'react';
import classNames from "classnames";
import {Classes, Intent} from "@blueprintjs/core/";

import Styles from './ProfilePanel.scss';
import {HorizontalDivider} from "../../../../../../../components/HorizontalDivider";

export class ProfilePanel extends React.Component {
    componentDidMount(){
        this.props.profile = {
            name : null,
            gender : null,
            country : null,
            homeAddress : null,
            themeDefault : null,
            languageDefault : null,
        }
    }

    render(){
        const {name, gender,country,homeAddress,themeDefault,languageDefault} = this.props.profile;
        return (
            <div>
                <h4>Personal Info</h4>
                <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_STRIPED)}>
                    <tbody>
                    <tr>
                        <td className={Styles.PROFILE_PANEL_TITLE}>Name</td>
                        <td className={Styles.PROFILE_PANEL_VALUE}>{name}</td>
                    </tr>
                    <tr>
                        <td className={Styles.PROFILE_PANEL_TITLE}>Gender</td>
                        <td className={Styles.PROFILE_PANEL_VALUE}>{gender}</td>
                    </tr>
                    <tr>
                        <td className={Styles.PROFILE_PANEL_TITLE}>Country</td>
                        <td className={Styles.PROFILE_PANEL_VALUE}>{country}</td>
                    </tr>
                    <tr>
                        <td className={Styles.PROFILE_PANEL_TITLE}>Home Address</td>
                        <td className={Styles.PROFILE_PANEL_VALUE}>{homeAddress}</td>
                    </tr>
                    </tbody>
                </table>
                <HorizontalDivider/>
                <h4>Personal Configuration</h4>
                <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_STRIPED)}>
                    <tbody>
                    <tr>
                        <td className={Styles.PROFILE_PANEL_TITLE}>Theme</td>
                        <td className={Styles.PROFILE_PANEL_VALUE}>{themeDefault}</td>
                    </tr>
                    <tr>
                        <td className={Styles.PROFILE_PANEL_TITLE}>Language</td>
                        <td className={Styles.PROFILE_PANEL_VALUE}>{languageDefault}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}