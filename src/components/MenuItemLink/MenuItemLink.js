import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { MenuItem } from '@blueprintjs/core';

const MenuItemLink = (props) => (
    <MenuItem text={props.text} onClick={props.onClick(props.to)}/>
);

const mapDispatchToProps = {
    onClick : push,
};

export default connect(undefined,mapDispatchToProps)(MenuItemLink);
