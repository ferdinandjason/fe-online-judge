import React from 'react';

import { ContestListCard } from "../components";

import ContestListTable from "../ContestListTable/ContestListTable";
import LoadingContestListTable from "../ContestListTable/LoadingContestListTable";

import style from './ContestListPage.scss';

class ContestListPage extends React.Component {
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
                <ContestListCard title={"Contests"}>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                    <LoadingContestListTable/>
                </ContestListCard>
            );
        }
        return (
            <ContestListCard title={"Contests"}>
                <ContestListTable contestList={contestList}/>
            </ContestListCard>
        );
    };

    render(){
        return (
            <div className={style.contest__page__container}>
                {this.renderContestList(this.state.contest)}
            </div>
        );
    }
}

export default ContestListPage;