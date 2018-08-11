import React from 'react';
import {Intent, ProgressBar} from '@blueprintjs/core';

import Styles from './LoadingState.scss';

class LoadingState extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            show: false,
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({show: true});
            this.timer = 0;
        }, 500);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = 0;
        }
    }

    render() {
        return (
            <div className={Styles.LOADING_WRAPPER}>
                <ProgressBar className={"loading-state"} intent={Intent.PRIMARY}/>
            </div>
        );
    }
}

export default LoadingState;