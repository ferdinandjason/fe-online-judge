import React from 'react';

import {SinglePageLayout} from "../../../../components/layouts/SinglePageLayout";
import {SubmissionList} from "../../../../components/submission";
import WelcomeHead from "./components/WelcomeHead/WelcomeHead";
import NewProblemContainer from "./components/NewProblem/NewProblemContainer/NewProblemContainer";
import LatestContestContainer from "./components/LatestContest/LatestContestContainer/LatestContestContainer";
import TopUserList from "./components/TopUsers/TopUserList/TopUserList";

import submission from "../../../../assets/images/submission.png";
import rank from "../../../../assets/images/submission.png";


import Styles from './WelcomePage.scss';


export class WelcomePage extends React.Component {
    render() {
        return (
            <SinglePageLayout>
                <div className={Styles.wh_background}>
                    <div className={Styles.w_container_1}>
                        <WelcomeHead/>
                    </div>
                </div>

                <div className={Styles.w_container_2}>
                    <div className={Styles.w_image}>
                        <img src={submission} alt={'submission'}/>
                    </div>
                    <SubmissionList/>
                </div>

                <div className={Styles.w_container_3}>
                    <TopUserList/>
                    <div className={Styles.w_image}>
                        <img src={rank} alt={'top'}/>
                    </div>
                </div>

                <div className={Styles.w_container_4}>
                    <NewProblemContainer/>
                    <LatestContestContainer/>
                </div>

            </SinglePageLayout>
        )
    }
}
