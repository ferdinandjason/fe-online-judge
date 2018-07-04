import React from 'react';
import { Link } from 'react-router-dom';
import { Card , Tag, Intent } from '@blueprintjs/core';

import style from './ContestListTable.scss';

const LoadingContestListTable = () => (
    <Card className={style.contest_list_container}>
        <div className={style.contest_list_container_container+' '+style.contest_list_item_container}>
            <div>
                <h4 className={"pt-skeleton"}>Placeholder for contest name</h4>
                <p className={"pt-skeleton"}>
                    <small>Placeholder for contest date and time</small>
                </p>
            </div>
            <p style={{display:'inline'}}>
                <Tag intent={Intent.PRIMARY} className={style.contest_list_tag+' pt-skeleton'}>Tag 1</Tag>
                <Tag intent={Intent.PRIMARY} className={style.contest_list_tag+' pt-skeleton'}>Tag 2</Tag>
                <Tag intent={Intent.PRIMARY} className={style.contest_list_tag+' pt-skeleton'}>Tag 3</Tag>
            </p>
            <div className={style.contest_list_item_container}>
                <div className={style.contest_list_button_container}>
                    <Link to={'#'} as={"button"} className={"pt-skeleton"}>
                        View Button
                    </Link>
                </div>
            </div>
        </div>
    </Card>
);

export default LoadingContestListTable;