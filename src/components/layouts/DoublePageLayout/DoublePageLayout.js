import React from 'react';

import { Breadcrumb } from '../../';
import Styles from './DoublePageLayout.scss';

const DoublePageLayout = (props) => (
    <div>
        <Breadcrumb/>
        <div className={Styles.DOUBLE_PAGE_LAYOUT}>{props.children}</div>
    </div>
);

export default DoublePageLayout;