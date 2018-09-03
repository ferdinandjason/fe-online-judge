import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Button, Classes, Intent, Tooltip, Position, Alert} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {API} from "../../../../../../../../../modules/api";
import {selectToken} from "../../../../../../../../../modules/dispatcher/session";

import Styles from './ProblemRepositoryListTable.scss';

class ProblemRepositoryListTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            problem: {
                slug:''
            },
        };
        this.handleAlert = this.handleAlert.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    render() {
        const {problemList} = this.props;
        return (
            <table
                className={classNames(Classes.HTML_TABLE, Classes.HTML_TABLE_STRIPED, Classes.INTERACTIVE, Styles.PROBLEM_REPO_LIST_TABLE_WRAPPER)}>
                <thead>
                <tr>
                    <th className={classNames(Styles.PROBLEM_REPO_LIST_TABLE_TITLE, Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE)}>ID</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Slug</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Problem</th>
                    <th className={classNames(Styles.PROBLEM_REPO_LIST_TABLE_TITLE, Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE)}>Statistic</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    problemList.map(problem => {
                        return (
                            <tr key={problem.id} style={{textAlign: 'center'}}>
                                <td className={Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE}
                                    style={{textAlign: 'center'}}>{problem.id}</td>
                                <td style={{textAlign: 'center'}}>{problem.slug}</td>
                                <td style={{textAlign: 'center'}}>{problem.title}</td>
                                <td className={Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE}
                                    style={{textAlign: 'center'}}>{problem.statistic}</td>
                                <td style={{textAlign: 'center'}}>
                                    <Link to={`/repository/problem/${problem.id}`}>
                                        <Tooltip content="Enter" position={Position.TOP}>
                                            <Button icon={IconNames.LOG_IN} intent={Intent.PRIMARY}/>
                                        </Tooltip>
                                    </Link>
                                    <Tooltip content="Delete" position={Position.TOP}>
                                        <Button icon={IconNames.DELETE} intent={Intent.DANGER} onClick={()=> this.handleAlert(problem)}/>
                                    </Tooltip>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <Alert
                    canEscapeKeyCancel={true}
                    canOutsideClickCancel={true}
                    cancelButtonText="Cancel"
                    confirmButtonText="Delete Problem"
                    icon={IconNames.TRASH}
                    intent={Intent.DANGER}
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                >
                    <p>
                        Are you sure you want to delete problem <b>{this.state.problem.slug}</b>? You will be able to restore it later.
                    </p>
                </Alert>
            </table>
        );
    }

    handleAlert(problem){
        this.setState({isOpen:true});
        this.setState({problem});
    }

    handleCancel = () => {
        this.setState({isOpen:false});
        this.setState({problem:{slug:''}});
    };

    handleConfirm = () => {
        const {problem} = this.state;
        this.props.onDeleteProblem(problem.id,problem.slug)
            .then(()=>{
                API.sessionAPI.refreshToken(selectToken());
                this.setState({isOpen:false});
                this.setState({problem:{slug:''}});
            });
    }
}

export default ProblemRepositoryListTable;