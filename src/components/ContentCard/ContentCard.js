import React from 'react';
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

import Styles from './ContentCard.scss';

export const ContentCard = (props) => (
    <div className={classNames(Classes.CARD, Styles.CONTENT_CARD)}>
        {props.children}
    </div>
);
