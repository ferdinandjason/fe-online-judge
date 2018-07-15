import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './ProblemDescription.scss';

export const ProblemDescription = (props) => {
    return (
        <div className={classNames("bp3-card",style.problem_card_content)}>
            {props.problem.description}
        </div>
    )
};

ProblemDescription.propTypes = {
    problem : {
        title : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
    }
};