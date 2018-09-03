import React from 'react';
import {Classes} from '@blueprintjs/core';
import classNames from 'classnames';

import Styles from './CardContainer.scss';

const CardContainer = (props) => {
    return (
        <div className={classNames(Styles.CARD_CONTAINER, props.className)}>
            <div className={classNames(Classes.CARD, Styles.CARD_TITLE)}>
                <h3 className={Styles.CARD_TITLE_TEXT}>
                    {props.title}
                </h3>
                <div className={Styles.CARD_TITLE_ACTION}>{props.action}</div>
            </div>
            <div
                className={classNames(Classes.CARD,Styles.CARD_CONTENT,{[Styles.CARD_CONTENT_STRICT] : props.strict})}>{props.children}</div>
        </div>
    )
};

export default CardContainer;