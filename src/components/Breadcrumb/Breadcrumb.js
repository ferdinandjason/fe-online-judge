import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Classes} from '@blueprintjs/core';
import classNames from 'classnames';

import {getBreadcrumbs} from "../../modules/dispatcher/breadcrumb";

import Styles from './Breadcrumb.scss';

const Breadcrumb = (props) => {
    const items = props.breadcrumbs.map((item, idx) => (
        <li key={item.link}>
            <Link to={item.link}
                  className={classNames(Classes.BREADCRUMB, {"bp3-breadcrumb-current": idx === props.breadcrumbs.length})}>
                {item.title}
            </Link>
        </li>
    ));
    return (
        <div className={Styles.BREADCRUMBS}>
            <div className={Styles.BREADCRUMBS_CONTENT}>
                <ul className={Classes.BREADCRUMBS}>{items}</ul>
            </div>
        </div>
    );
};

function createBreadcrumb() {
    const mapStateToProps = (store) => ({
        breadcrumbs: getBreadcrumbs(store),
    });
    return connect(mapStateToProps)(Breadcrumb)
}

export default createBreadcrumb();