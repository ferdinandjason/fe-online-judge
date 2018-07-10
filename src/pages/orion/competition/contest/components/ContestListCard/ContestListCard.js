import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './ContestListCard.scss';

export const ContestListCard = (props) => (
    <div className={style.card__container}>
        <div className={classNames("pt-card",style.card__title)}>
            <h3 className={style.card__title__text}>
                {props.title}
            </h3>
            <div className={style.card__title__action}>{props.action}</div>
        </div>
        <div className={classNames("pt-card",style.card__content)}>{props.children}</div>
    </div>
);

ContestListCard.propTypes = {
    title : PropTypes.string.isRequired,
    action : PropTypes.func,
};