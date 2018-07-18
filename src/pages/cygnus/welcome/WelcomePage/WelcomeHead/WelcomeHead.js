import React from 'react';
import WelcomeHeadCard from "./WelcomeHeadCard/WelcomeHeadCard";

import style from './WelcomeHead.scss';

class WelcomeHead extends React.Component {
    render(){
        return (
            <div className={[style.panel, style.wh_table].join(' ')}>
                <WelcomeHeadCard 
                    title={"Learn programming"}
                    description={"Start with our set of elementary problems. This will help you to get familiar with the basics of programming."}
                    link={"#"}
                    button={"Basic Problems"}
                />

                <WelcomeHeadCard 
                    title={"Practice algorithms"}
                    description={"An algorithm refers to a number of steps required for solving a problem. It makes you to become a better, smarter, productive being! Proof it now!"}
                    link={"#"}
                    button={"Contest"}
                />

                <WelcomeHeadCard 
                    title={"Take the challenge"}
                    description={"If you are familiar with all concepts of algorithms and data structures, you are probably looking for new challenges. We can pick a problem at random for you."}
                    link={"#"}
                    button={"Random Problem"}
                />
                
            </div>            
        );
    }
}

export default WelcomeHead;

























