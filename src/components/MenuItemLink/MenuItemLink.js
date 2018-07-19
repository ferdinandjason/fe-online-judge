import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { MenuItem } from '@blueprintjs/core';

const MenuItemLink_ = (props) => (
    <MenuItem text={props.text} onClick={props.onClick}/>
);

const mapDispatchToProps = {
    onClick : push,
};

export const MenuItemLink = connect(undefined,mapDispatchToProps)(MenuItemLink_);
