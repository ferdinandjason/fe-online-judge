import React from 'react';
import { Link } from 'react-router-dom';
import { Card , Tag, Intent } from '@blueprintjs/core';

import style from './ContestListTable.scss';

class ContestListTable extends React.Component{
    render(){
        const list = this.props.contestList;
        const contestList = list.map(contest => (
           <div key={contest.id} className={style.contest_list_container_container+' '+style.contest_list_item_container}>
               <div>
                   <h4 className={style.contest_list_item_name}>{contest.name}</h4>
                   <p className={style.contest_list_item_date}>
                       <small>
                           TIME
                       </small>
                   </p>
               </div>
               <p style={{display:'inline'}}>
                   {
                       contest.tags.map(tag=>{
                          return (
                              <Tag intent={Intent.PRIMARY} className={style.contest_list_tag}>{tag}</Tag>
                          );
                       })
                   }
               </p>
               <div className={style.contest_list_item_container}>
                   <div className={style.contest_list_button_container}>
                       <Link to={`/competition/contest/$(contest.id)`}>
                           View
                       </Link>
                   </div>
               </div>
           </div>
        ));

        return <Card className={style.contest_list_container}>{contestList}</Card>;
    }
}

export default ContestListTable;