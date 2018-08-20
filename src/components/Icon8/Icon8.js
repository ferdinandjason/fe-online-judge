import React from 'react';

import './Icon8.css';

const Icon8 = (props) => (
    <div className='bp3-icon' style={{height:`${props.size}px`}}>
        <img src={`https://png.icons8.com/dusk/${props.size}/000000/${props.icon}.png`} className='icon8-active' alt={`${props.icon} active`}/>
        <img src={`https://png.icons8.com/wired/${props.size}/000000/${props.icon}.png`} className='icon8-nonactive' alt={`${props.icon} nonactive`}/>
    </div>
);

export default Icon8;