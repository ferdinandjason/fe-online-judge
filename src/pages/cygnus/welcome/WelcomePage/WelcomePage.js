import React from 'react';

import {SinglePageLayout} from "../../../../components/layouts/SinglePageLayout";
import WelcomeHead from "./WelcomeHead/WelcomeHead";
import NewProblemList from "./NewProblem/NewProblemList/NewProblemList";
import SubmissionList from "./Submissions/SubmissionList/SubmissionList";

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
                    <NewProblemList/>
                    <SubmissionList/>
                </div>
                
            </SinglePageLayout>
        )
    }
}
