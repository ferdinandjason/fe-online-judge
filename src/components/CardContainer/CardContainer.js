import React from 'react';
import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Styles from './CardContainer.scss';

const CardContainer = (props) => {
    return (
        <div className={classNames(Styles.CARD_CONTAINER,props.className)}>
            <div className={classNames(Classes.CARD,Styles.CARD_TITLE)}>
                <h3 className={Styles.CARD_TITLE_TEXT}>
                    {props.title}
                </h3>
                <div className={Styles.CARD_TITLE_ACTION}>{props.action}</div>
            </div>
            <div className={Classes.CARD+' '+Styles.CARD_CONTENT+' '+((props.strict)?Styles.CARD_CONTENT_STRICT:'')}>{props.children}</div>
        </div>
    )
};

CardContainer.propTypes = {
    title : PropTypes.string.isRequired,
    action : PropTypes.func,
    className : PropTypes.string,
};

export default CardContainer;