import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Classes, Intent } from '@blueprintjs/core';

import Styles from './ButtonLink.scss';

const ButtonLink = (props) => {
    const { intent, ...restProps } = props;
    const classIntent =
        (intent === Intent.PRIMARY) ? classNames(Classes.INTENT_PRIMARY,Styles.BUTTON_LINK_INTENT) :
        (intent === Intent.SUCCESS) ? classNames(Classes.INTENT_SUCCESS,Styles.BUTTON_LINK_INTENT) :
        (intent === Intent.DANGER) ? classNames(Classes.INTENT_DANGER,Styles.BUTTON_LINK_INTENT) :
        (intent === Intent.WARNING) ? classNames(Classes.INTENT_WARNING,Styles.BUTTON_LINK_INTENT) : '';
    const className = classNames(Classes.BUTTON, props.className,Styles.BUTTON_LINK,classIntent);
    return <Link {...restProps} as="button" className={className}/>
};

export default ButtonLink;