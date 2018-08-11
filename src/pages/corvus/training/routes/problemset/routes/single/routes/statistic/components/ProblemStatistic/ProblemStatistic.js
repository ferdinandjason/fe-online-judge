import React from 'react';
import ReactEcharts from "echarts-for-react";

import {ContentCard} from "../../../../../../../../../../../components";

export class ProblemStatistic extends React.Component {
    render() {
        const {problem, pie} = this.props;
        let slug = '', title = '';
        if (problem != null) {
            slug = problem.slug;
            title = problem.title;
        }
        const initProps = {
            height: 480,
        }
        return (
            <ContentCard>
                <h2>
                    Statistic {slug} - {title}
                </h2>
                <ReactEcharts {...pie} style={initProps}/>
            </ContentCard>
        );
    }
}