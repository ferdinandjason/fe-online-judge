import React from 'react';

import style from './SinglePageLayout.scss';

export const SinglePageLayout = (props) => (
    <div className={style.single_page_layout}>
        {props.children}
    </div>
)