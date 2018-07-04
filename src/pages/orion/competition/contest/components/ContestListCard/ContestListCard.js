import React from 'react';

import style from './ContestListCard.scss';

const ContestListCard = (props) => (
    <div className={style.card__container}>
        <div className={"pt-card "+style.card__title}>
            <h3 className={style.card__title__text}>
                {props.title}
            </h3>
            <div className={style.card__title__action}>{props.action}</div>
        </div>
        <div className={"pt-card "+style.card__content}>{props.children}</div>
    </div>
);

export default ContestListCard;