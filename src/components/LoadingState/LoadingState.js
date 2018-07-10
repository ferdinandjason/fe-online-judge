import React from 'react';
import { ProgressBar, Intent } from '@blueprintjs/core';

import style from './LoadingState.scss';

export class LoadingState extends React.Component {
    constructor(props){
        super(props);
        this.timer = null;
        this.state = {
            show: false,
        }
    }

    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({show:true});
            this.timer = 0;
        },500);
    }

    componentWillUnmount(){
        if(this.timer){
            clearTimeout(this.timer);
            this.timer = 0;
        }
    }

    render(){
        return (
            <div className={style.loading_wrapper}>
                <ProgressBar className={"loading-state"} intent={Intent.PRIMARY}/>
            </div>
        );
    }
}