import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, Classes , Tag, Intent } from '@blueprintjs/core';

import Styles from './ContestListTable.scss';

const LoadingContestListTable = () => (
    <Card className={Styles.CONTEST_LIST_CONTAINER}>
        <div className={classNames(Styles.CONTEST_LIST_CONTAINER_CONTAINER,Styles.CONTEST_LIST_ITEM_CONTAINER)}>
            <div>
                <h4 className={Classes.SKELETON}>Placeholder for contest name</h4>
            </div>
            <p style={{display:'inline'}}>
                <Tag intent={Intent.PRIMARY} className={classNames(Styles.CONTEST_LIST_TAG,Classes.SKELETON)}>Tag 1</Tag>
                <Tag intent={Intent.PRIMARY} className={classNames(Styles.CONTEST_LIST_TAG,Classes.SKELETON)}>Tag 2</Tag>
                <Tag intent={Intent.PRIMARY} className={classNames(Styles.CONTEST_LIST_TAG,Classes.SKELETON)}>Tag 3</Tag>
            </p>
            <div className={Styles.CONTEST_LIST_INFO_CONTAINER}>
                <p className={Classes.SKELETON}>
                    <small>Placeholder for contest date and time</small>
                </p>
                <div className={Styles.CONTEST_LIST_BUTTON_CONTAINER}>
                    <Link to={'#'} as={"button"} className={Classes.SKELETON}>
                        View Button
                    </Link>
                </div>
            </div>
        </div>
    </Card>
);

export default LoadingContestListTable;