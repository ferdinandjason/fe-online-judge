import React from 'react';

import style from './ProblemDescription.scss';

const ProblemDescription = (props) => {
    return (
        <div className={"pt-card "+style.problem_card_content}>
            <p className={style.problem_card_title}>Deskripsi Soal</p>
            {props.problem.deskripsi}
            <p className={style.problem_card_title}>Format Input</p>
            {props.problem.format_input}
            <p className={style.problem_card_title}>Format Output</p>
            {props.problem.format_output}
        </div>
    )
};

export default ProblemDescription;