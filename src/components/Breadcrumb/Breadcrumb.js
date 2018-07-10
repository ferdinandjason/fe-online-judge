import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import style from './Breadcrumb.scss';

export const Breadcrumb = (props) => {
    const items = props.breadcrumbs.map((item,idx) => (
        <li key={item.link}>
            <Link to={item.link} className={classNames("pt-breadcrumb",{"pt-breadcrumb-current":idx===props.breadcrumbs.length})}>
                {item.title}
            </Link>
        </li>
    ));
    return (
        <div className={style.breadcrumbs}>
            <div className={style.breadcrumbs__content}>
                <ul className="pt-breadcrumbs">{items}</ul>
            </div>
        </div>
    );
};

Breadcrumb.propTypes = {
      breadcrumbs : PropTypes.arrayOf({
          link : PropTypes.string.isRequired,
          title : PropTypes.string.isRequired,
      }).isRequired
};