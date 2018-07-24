import React from 'react';

import Styles from './ContentWithMultipleSidebar.scss';

const ContentWithMultipleSidebar = (props) => (
    <div className={Styles.CONTENT_WITH_MULTIPLE_SIDEBAR}>
        <div className={Styles.CONTENT_WITH_MULTIPLE_SIDEBAR__SIDEBAR}>
            {props.multisidebar.map( sidebar => (sidebar))}
        </div>
        <div className={Styles.CONTENT_WITH_MULTIPLE_SIDEBAR__CONTENT}>
            {props.content}
        </div>
    </div>
);

export default ContentWithMultipleSidebar;