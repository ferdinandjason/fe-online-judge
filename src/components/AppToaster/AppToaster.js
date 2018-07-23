import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast, Toaster, Position } from '@blueprintjs/core';

class AppToaster extends Component {
    constructor(props){
        super(props);
        this.toaster = null;

        this.refHandlers = {
            toaster : (ref) => (this.toaster = ref)
        };

        this.state = {
            toaster : {
                autoFocus : false,
                canEscapeKeyClear : true,
                position : Position.TOP,
            },
            toast : [],
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.toast);
        this.toaster.show(nextProps.toast);
    }

    render(){
        return (
            <Toaster {...this.state.toaster} ref={this.refHandlers.toaster}>
                {this.state.toast.map(toast => <Toast {...toast}/>)}
            </Toaster>
        )
    }
}

const mapStateToProps = (state) => ({
    toast : state.toast,
});

export default connect(mapStateToProps)(AppToaster);