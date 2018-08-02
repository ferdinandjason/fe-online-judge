import React from 'react';
import PropTypes from 'prop-types';

import Styles from './WelcomeHeadCard.scss';

export const WelcomeHeadCard = (props) => {
    return (
    	<div className={Styles.wh_card}>
    		<h2 className={Styles.wh_title}>{props.title}</h2>
            <span className={Styles.wh_desc}>{props.description}</span><br/>
            <a href={"/"+props.link} className={Styles.wh_button}>{props.button}</a>
    	</div>
    )
};


WelcomeHeadCard.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
   	link : PropTypes.string.isRequired,
    button : PropTypes.string.isRequired,
};

export default WelcomeHeadCard;