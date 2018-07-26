import React from 'react';

import TopUserTable from "../TopUserTable/TopUserTable";
import LoadingTopUserTable from "../TopUserTable/LoadingTopUserTable";
import {CardContainer} from "../../../../../../components";

import style from './TopUserList.scss';

class TopUserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    async componentDidMount(){
        const topuserList = null ; // await TODO: function to fetch ProblemList
        this.setState({user:topuserList});
    }

    renderTopUserList = (topuserList) => {
        if(!topuserList || topuserList.length === 0){
            return (
                <CardContainer title={"Top Users"} strict={true}>
                    <LoadingTopUserTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Top Users"} strict={true}>
                <TopUserTable topuserList={topuserList}/>
            </CardContainer>
        )
    };

    render(){
        return (
            <div className={style.topuser_container}>
                {this.renderTopUserList()}
            </div>
        )
    }

}

export default TopUserList;