import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Card, Intent, Tag} from '@blueprintjs/core';

import Styles from './ContestListTable.scss';

class ContestListTable extends React.Component {
    render() {
        const list = this.props.contestList;
        const contestList = list.map(contest => (
            <div key={contest.id}
                 className={classNames(Styles.CONTEST_LIST_CONTAINER_CONTAINER, Styles.CONTEST_LIST_ITEM_CONTAINER)}>
                <div>
                    <h4 className={Styles.CONTEST_LIST_ITEM_NAME}>{contest.name}</h4>
                </div>
                <p style={{display: 'inline'}}>
                    {
                        contest.tags.map(tag => {
                            return (
                                <Tag intent={Intent.PRIMARY} className={Styles.CONTEST_LIST_TAG}>{tag}</Tag>
                            );
                        })
                    }
                </p>
                <div className={Styles.CONTEST_LIST_INFO_CONTAINER}>
                    <p className={Styles.CONTEST_LIST_ITEM_DATE}>
                        <small>TIME</small>
                    </p>
                    <div className={Styles.CONTEST_LIST_BUTTON_CONTAINER}>
                        <Link to={`/competition/contest/$(contest.id)`}>
                            View
                        </Link>
                    </div>
                </div>
            </div>
        ));

        return <Card className={Styles.CONTEST_LIST_CONTAINER}>{contestList}</Card>;
    }
}

export default ContestListTable;