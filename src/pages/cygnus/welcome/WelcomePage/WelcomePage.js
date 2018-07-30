import React from 'react';

import {SinglePageLayout} from "../../../../components/layouts/SinglePageLayout";
import WelcomeHead from "./WelcomeHead/WelcomeHead";
import NewProblemList from "./NewProblem/NewProblemList/NewProblemList";
import LatestContestList from "./LatestContest/LatestContestList/LatestContestList";
import SubmissionList from "./Submissions/SubmissionList/SubmissionList";
import TopUserList from "./TopUsers/TopUserList/TopUserList";

import submission from "../../../../assets/images/submission.png";
import rank from "../../../../assets/images/submission.png";


import style from './WelcomePage.scss';


export class WelcomePage extends React.Component{
    render(){
        return (
            <SinglePageLayout>
                <div className={style.wh_background}>
                    <div className={style.w_container_1}>
                        <WelcomeHead/>
                    </div>
                </div>

                <div className={style.w_container_2}>
                    <div className={style.w_image}>
                        <img src={submission} />
                    </div>
                    <SubmissionList/>
                </div>

                <div className={style.w_container_3}>
                    <TopUserList/>
                    <div className={style.w_image}>
                        <img src={rank} />
                    </div>
                </div>

                <div className={style.w_container_4}>
                    <NewProblemList/>
                    <LatestContestList/>
                </div>
                
            </SinglePageLayout>
        )
    }
}
