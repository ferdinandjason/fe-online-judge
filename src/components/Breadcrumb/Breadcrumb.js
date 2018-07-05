import React from 'react';

import { Link } from 'react-router-dom';

import style from './Breadcrumb.scss';

const Breadcrumb = (props) => {
    const items = props.breadcrumbs.map((item,idx) => (
        <li key={item.link}>
            <Link to={item.link} className={"pt-breadcrumb"+(idx===props.breadcrumbs.length)?' pt-breadcrumb-current':''}>
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

export default Breadcrumb;