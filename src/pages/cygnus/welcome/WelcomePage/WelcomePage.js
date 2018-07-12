import React from 'react';
import { Icon } from '@blueprintjs/core';
import { SinglePageLayout } from "../../../../components";

import style from './WelcomePage.scss';

export class WelcomePage extends React.Component{
    render(){
        return (
            <SinglePageLayout>
                <h3 className={style.welcome_icon}>
                    <Icon icon="oil-field" className="home__icon" iconSize={Icon.SIZE_LARGE} />
                </h3>
                <h3 className={style.welcome_text}>Dashboard under construction.</h3>
            </SinglePageLayout>
        )
    }
}
