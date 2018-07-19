import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Classes, Intent } from '@blueprintjs/core';

import Styles from './ButtonLink.scss';

export const ButtonLink = (props) => {
    const { intent, ...restProps } = props;
    const classIntent =
        (intent === Intent.PRIMARY) ? Classes.INTENT_PRIMARY :
        (intent === Intent.SUCCESS) ? Classes.INTENT_SUCCESS :
        (intent === Intent.DANGER) ? Classes.INTENT_DANGER :
        (intent === Intent.WARNING) ? Classes.INTENT_WARNING : '';
    const className = classNames(Classes.BUTTON, props.className,classIntent,Styles.BUTTON_LINK);
    return <Link {...restProps} as="button" className={className}/>
};