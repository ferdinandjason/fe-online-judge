import React from 'react';

import style from './ProblemDescription.scss';

const ProblemDescription = (props) => {
    return (
        <div className={"pt-card "+style.problem_card_content}>
            <p className={style.problem_card_title}>{props.proble.title}</p>
            {props.problem.deskripsi}
        </div>
    )
};

export default ProblemDescription;