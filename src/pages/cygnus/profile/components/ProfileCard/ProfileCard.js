import React from 'react';
import { connect } from 'react-redux';
import { Icon,Button, ButtonGroup, Intent, Classes, Tag } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import Styles from './ProfileCard.scss';
import defaultUser from '../../../../../assets/images/user.png';
import {HorizontalDivider} from "../../../../../components/HorizontalDivider";
import {CardContainer} from "../../../../../components/CardContainer";
import classNames from "classnames";
import {withBreadcrumb} from "../../../../../components";

class ProfileCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content : 'detail',
        }
    }

    render(){
        return (
            <div style={{display:'flex'}}>
                <div className={Styles.PROFILE_CARD}>
                    <div className={Styles.IMAGE}>
                        <img src={defaultUser} alt={'profile'}/>
                    </div>
                    <div className={Styles.CONTENT}>
                        <div className={Styles.HEADER}>
                            {this.props.profile.name}
                        </div>
                        <div className={Styles.DESCRIPTION}>
                            {this.props.profile.email}
                        </div>
                        <HorizontalDivider/>
                        <div className={Styles.ITEM}>
                            <div className={Styles.ITEM_TITLE} style={{textAlign:'center'}}>
                                <Icon icon={IconNames.THUMBS_UP}/>&nbsp;
                                Detail
                            </div>
                            <div className={Styles.CHILDREN} style={{textAlign:'center'}}>
                                0
                            </div>
                        </div>
                        <HorizontalDivider/>
                        <div className={Styles.ITEM}>
                            <div className={Styles.ITEM_TITLE} style={{textAlign:'center'}}>
                                <Icon icon={IconNames.DOCUMENT_SHARE}/>&nbsp;
                                Submission
                            </div>
                            <div className={Styles.CHILDREN} style={{textAlign:'center'}}>
                                0
                            </div>
                        </div>
                        <HorizontalDivider/>
                        <div className={Styles.ITEM}>
                            <div className={Styles.ITEM_TITLE} style={{textAlign:'center'}}>
                                <Icon icon={IconNames.TIME}/>&nbsp;
                                Joined
                            </div>
                            <div className={Styles.CHILDREN} style={{textAlign:'center'}}>
                                One week ago
                            </div>
                        </div>
                    </div>
                    <div style={{width:'inherit',marginTop:'15px'}}>
                        <ButtonGroup  style={{width:'inherit',height:'40px'}}>
                            <Button icon={IconNames.THUMBS_UP} text='Solved' intent={Intent.NONE}  style={{width:'33%'}} onClick={()=>{this.setState({content:'detail'})}}/>
                            <Button icon={IconNames.DOCUMENT_SHARE} text='Submit' intent={Intent.PRIMARY}  style={{width:'33%'}} onClick={()=>{this.setState({content:'submission'})}}/>
                            <Button icon={IconNames.TIME} text='Statistic' intent={Intent.SUCCESS}  style={{width:'35%'}} onClick={()=>{this.setState({content:'statistic'})}}/>
                        </ButtonGroup>
                    </div>
                </div>
                <div className={Styles.PROFILE_CARD_CONTENT}>
                    {this.renderContent()}
                </div>
            </div>
        )
    }

    renderContent(){
        if(this.state.content === 'detail') return this.renderDetail();
        if(this.state.content === 'submission') return this.renderSubmission();
        if(this.state.content === 'statistic') return this.renderStatistic();
    }

    renderDetail(){
        return (
            <CardContainer title={'Detail'}>
                <h4>Problem</h4>
                <div className={Styles.PROFILE_CARD_SOLVED_LIST}>
                    <Tag interactive large icon={IconNames.SAVED}>APLUSB</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>AMINB</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>AMULB</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>ADIVB</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>ADDIVB</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>COBA1</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>COBA2</Tag>
                    <Tag interactive large icon={IconNames.SAVED}>COBA3</Tag>
                </div>
                <HorizontalDivider/>
                <h4>Contest</h4>
                <div className={Styles.PROFILE_CARD_SOLVED_LIST}>
                    <Tag interactive large icon={IconNames.TIMELINE_EVENTS}>Contest Pertama</Tag>
                    <Tag interactive large icon={IconNames.TIMELINE_EVENTS}>Contest Dasprog Modul 1</Tag>
                    <Tag interactive large icon={IconNames.TIMELINE_EVENTS}>Contest Dasprog Modul 2</Tag>
                    <Tag interactive large icon={IconNames.TIMELINE_EVENTS}>Contest Dasprog Modul 3</Tag>
                    <Tag interactive large icon={IconNames.TIMELINE_EVENTS}>Contest Dasprog Modul 4</Tag>
                    <Tag interactive large icon={IconNames.TIMELINE_EVENTS}>Contest Dasprog Modul 5</Tag>
                </div>
                <HorizontalDivider/>
                <h4>Language</h4>
                <div className={Styles.PROFILE_CARD_SOLVED_LIST}>
                    <Tag interactive large icon={IconNames.CODE}>C++</Tag>
                    <Tag interactive large icon={IconNames.CODE}>C</Tag>
                    <Tag interactive large icon={IconNames.CODE}>Pascal</Tag>
                    <Tag interactive large icon={IconNames.CODE}>Java</Tag>
                    <Tag interactive large icon={IconNames.CODE}>Python</Tag>
                    <Tag interactive large icon={IconNames.CODE}>Javascript</Tag>
                </div>
                <HorizontalDivider/>
                <h4>Roles</h4>
                <div className={Styles.PROFILE_CARD_SOLVED_LIST}>
                    <Tag interactive large icon={IconNames.TAG} intent={Intent.SUCCESS}>Admin</Tag>
                    <Tag interactive large icon={IconNames.TAG} intent={Intent.SUCCESS}>Contest Maker</Tag>
                    <Tag interactive large icon={IconNames.TAG} intent={Intent.SUCCESS}>Problem Setter</Tag>
                    <Tag interactive large icon={IconNames.TAG}>User</Tag>
                </div>
                <HorizontalDivider/>
            </CardContainer>
        )
    }

    renderSubmission(){
        return (
            <CardContainer title={'Submission'} strict>
                <table className={classNames(Classes.HTML_TABLE,Classes.INTERACTIVE,Classes.HTML_TABLE_STRIPED,Styles.PROFILE_CARD_SUBMISSION_LIST)}>
                    <tbody>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    </tbody>
                </table>
            </CardContainer>
        )
    }

    renderStatistic(){
        return (
            <CardContainer title={'Statistic'}>
                Nanti muncul PieChart atau SpiderChart ceritanya
            </CardContainer>
        )
    }
}

function createProfileCard(){
    const mapStateToProps = (state) => ({
        profile : state.session.user,
    });
    return connect(mapStateToProps)(ProfileCard);
}

export default withBreadcrumb('Profile Card')(createProfileCard());