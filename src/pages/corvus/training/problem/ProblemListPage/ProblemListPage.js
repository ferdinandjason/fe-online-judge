import React from 'react';

import ProblemListTable from "../ProblemListTable/ProblemListTable";
import LoadingProblemListTable from "../ProblemListTable/LoadingProblemListTable";

class ProblemListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem : null
        }
    }

    async componentDidMount(){
        const problemList = null ; // await TODO: function to fetch ProblemList
        this.setState({problem:problemList});
    }

    renderProblemList = (problemList) => {
        if(!problemList || problemList.length === 0){
            return <LoadingProblemListTable/>
        }
        return (
            <div>
                <ProblemListTable problemList={problemList}/>
            </div>
        )
    };

    render(){
        return this.renderProblemList();
    }

}

export default ProblemListPage;