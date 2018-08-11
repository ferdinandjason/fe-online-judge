import React from 'react';

import {JUDGE_STATUS} from "../../../../../../../../../../../utils/constants";
import {ProblemStatistic} from '../ProblemStatistic/ProblemStatistic';
import {pieOptions} from './ProblemChartData';

class ProblemStatisticContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: null,
            pie: {
                option: pieOptions,
                showLoading: true,
            },
        }
    }

    componentDidMount() {
        const problem = null; // await this.props.onFetchProblemRankList(this.props.problemId)
        this.setState({problem});
        let problemData = {
            statistic_info: {
                '0': 26,
                '2': 14,
                '3': 3,
                '4': 1,
            },
            submission_number: 44,
            accepted_number: 26,
        };
        let pieOptionData = pieOptions;
        let acNum = problemData.accepted_number;
        let data = [
            {name: 'WA', value: problemData.submission_number - acNum},
            {name: 'AC', value: acNum}
        ];
        pieOptionData.series[0].data = data;
        let data2 = JSON.parse(JSON.stringify(data));
        data2[1].selected = true;
        pieOptionData.series[1].data = data2;
        let legend = Object.keys(problemData.statistic_info).map(ele => JUDGE_STATUS[ele].short);
        if (legend.length === 0) {
            legend.push('AC', 'WA')
        }
        pieOptionData.legend.data = legend;

        let acCount = problemData.statistic_info['0'];
        delete problemData.statistic_info['0'];
        let pieData = [];
        Object.keys(problemData.statistic_info).forEach(ele => {
            pieData.push({
                name: JUDGE_STATUS[ele].short,
                value: problemData.statistic_info[ele],
            })
        });
        pieData.push({
            name: 'AC',
            value: acCount,
        });
        pieOptionData.series[0].data = pieData;
        this.setState(
            {
                pie: {
                    option: pieOptionData,
                    showLoading: false,
                }
            }
        )
    }

    render() {
        return <ProblemStatistic problem={this.state.problem} pie={this.state.pie}/>
    }
}

export default ProblemStatisticContainer;