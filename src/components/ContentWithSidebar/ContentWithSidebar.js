import React from 'react';

import Styles from './ContentWithSidebar.scss';

const ContentWithSidebar = (props) => (
    <div className={Styles.CONTENT_WITH_SIDEBAR}>
        <div className={Styles.CONTENT_WITH_SIDEBAR__SIDEBAR}>
            {props.sidebar}
        </div>
        <div className={Styles.CONTENT_WITH_SIDEBAR__CONTENT}>
            {props.content}
        </div>
    </div>
);

export default ContentWithSidebar;