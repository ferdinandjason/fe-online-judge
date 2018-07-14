import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './CardContainer.scss';

export const CardContainer = (props) => {
    return (
        <div className={style.card__container}>
            <div className={classNames("bp3-card",style.card__title)}>
                <h3 className={style.card__title__text}>
                    {props.title}
                </h3>
                <div className={style.card__title__action}>{props.action}</div>
            </div>
            <div className={"bp3-card "+style.card__content+' '+((props.strict)?style.card__content_strict:'')}>{props.children}</div>
        </div>
    )
};

CardContainer.propTypes = {
    title : PropTypes.string.isRequired,
    action : PropTypes.func,
};