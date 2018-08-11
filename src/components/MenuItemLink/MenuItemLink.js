import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {withRouter} from 'react-router-dom'
import {MenuItem} from '@blueprintjs/core';

const MenuItemLink = (props) => (<MenuItem text={props.text} onClick={props.onClick}/>);

const mapDispatchToProps = (dispatch) => ({
    onClick: (to) => dispatch(push(to)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    text: ownProps.text,
    onClick: (event) => {
        event.preventDefault();
        ownProps.history.push(ownProps.to);
    },
});

export default withRouter(connect(undefined, mapDispatchToProps, mergeProps)(MenuItemLink));
