import React from 'react';

import { CardContainer } from "../../../../../../../../../components";
import ContestListTable from "../ContestListTable/ContestListTable";
import LoadingContestListTable from "../ContestListTable/LoadingContestListTable";


class ContestListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contest : null
        }
    }

    async componentDidMount(){
        const contestList = null; // await TODO: function to fetch ContestList
        this.setState({contest:contestList});
    }

    renderContestList = (contestList) => {
        if(!contestList || contestList.length === 0 ){
            return (
                <CardContainer title={"Contests"}>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                </CardContainer>
            );
        }
        return (
            <CardContainer title={"Contests"}>
                <ContestListTable contestList={contestList}/>
            </CardContainer>
        );
    };

    render(){
        return (
            <div className={'page__container'}>
                {this.renderContestList(this.state.contest)}
            </div>
        );
    }
}

export default ContestListContainer;