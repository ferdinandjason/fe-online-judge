import React from 'react';

import LatestContestTable from "../LatestContestTable/LatestContestTable";
import LoadingLatestContestTable from "../LatestContestTable/LoadingLatestContestTable";
import {CardContainer} from "../../../../../../../components";

import Styles from './LatestContestContainer.scss';

class LatestContestContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contest: null
        }
    }

    async componentDidMount(){
        const contestList = null ; // await TODO: function to fetch ProblemList
        this.setState({contest:contestList});
    }

    renderContestList = (contestList) => {
        if(!contestList || contestList.length === 0){
            return (
                <CardContainer title={"Latest Contest"} strict={true}>
                    <LoadingLatestContestTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Latest Contest"} strict={true}>
                <LatestContestTable contestList={contestList}/>
            </CardContainer>
        )
    };

    render(){
        return (
            <div className={Styles.contest__page__container}>
                {this.renderContestList()}
            </div>
        )
    }

}

export default LatestContestContainer;