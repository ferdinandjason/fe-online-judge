import React from 'react';

import Styles from './SinglePageLayout.scss';

const SinglePageLayout = (props) => (<div className={Styles.SINGLE_PAGE_LAYOUT}>{props.children}</div>)

export default SinglePageLayout;