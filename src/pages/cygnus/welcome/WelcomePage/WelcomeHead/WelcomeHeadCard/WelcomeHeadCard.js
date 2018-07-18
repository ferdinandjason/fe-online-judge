import React from 'react';
import PropTypes from 'prop-types';

import style from './WelcomeHeadCard.scss';

export const WelcomeHeadCard = (props) => {
    return (
    	<div className={style.wh_card}>
    		<h2 className={style.wh_title}>{props.title}</h2>
            <span className={style.wh_desc}>{props.description}</span>
            <a href={"/"+props.link} className={style.wh_button}>{props.button}</a>
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