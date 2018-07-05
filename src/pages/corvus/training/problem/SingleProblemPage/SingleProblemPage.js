import React from 'react';

import LoadingProblemDetail from '../components/ProblemDetail/LoadingProblemDetail';
import LoadingProblemDescription from '../components/ProblemDescription/LoadingProblemDescription';
import ProblemDetail from '../components/ProblemDetail/ProblemDetail';
import ProblemDescription from '../components/ProblemDescription/ProblemDescription';

class SingleProblemPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem : null
        }
    }

    async componentDidMount(){
        const problem = null; // await TODO: function to fetch Problem based on id
        this.setState({problem:problem});
    }

    renderProblem = (problem) => {
        if(!problem){
            return (
                <div>
                    <LoadingProblemDetail/>
                    <LoadingProblemDescription/>
                </div>
            )
        } else {
            return (
                <div>
                    <ProblemDetail problem={problem}/>
                    <ProblemDescription problem={problem}/>
                </div>
            )
        }
    };

    render(){
        return this.renderProblem(this.state.problem);
    }
}

export default SingleProblemPage;