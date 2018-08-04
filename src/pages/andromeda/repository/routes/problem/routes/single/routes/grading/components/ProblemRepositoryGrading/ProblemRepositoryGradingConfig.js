import React from 'react';
import classNames from 'classnames';
import { FormGroup, InputGroup, Classes, Button, Intent, Tag, TagInput } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";

const ProblemRepositoryGradingConfig = (props) => (
    <div className={"page__container"}>
        <CardContainer title={"Configuration"}>
            <div>
                <form>
                    <FormGroup
                        label={"Time Limit"}
                        labelFor={"time_limit"}
                    >
                        <InputGroup
                            id={"time_limit"}
                            className={Classes.FILL}
                            rightElement={(<Tag minimal={true}>milliseconds</Tag>)}
                        />
                    </FormGroup>
                    <FormGroup
                        label={"Memory Limit"}
                        labelFor={"memory_limit"}
                    >
                        <InputGroup
                            id={"time_limit"}
                            className={Classes.FILL}
                            rightElement={(<Tag minimal={true}>kilobytes</Tag>)}
                        />
                    </FormGroup>
                    <FormGroup
                        label={"Testcase"}
                        labelFor={"testcase"}
                    >
                        <div className={Classes.CARD}>
                            <table className={classNames(Classes.HTML_TABLE,Classes.INTERACTIVE,Classes.FILL)} style={{width:'80%',margin:'auto'}}>
                                <thead style={{fontWeight:'bold'}}>
                                <tr>
                                    <td>Input</td>
                                    <td>Output</td>
                                    <td>Action</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{textAlign:'center'}}><Tag minimal={true}>{'/APLUSB/1.in'}</Tag></td>
                                    <td style={{textAlign:'center'}}><Tag minimal={true}>{'/APLUSB/1.in'}</Tag></td>
                                    <td>
                                        <Button icon={IconNames.TRASH} intent={Intent.DANGER} minimal={true}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><TagInput values={['2.in']}/></td>
                                    <td><TagInput values={['2.out']}/></td>
                                    <td>
                                        <Button icon={IconNames.PLUS} intent={Intent.SUCCESS} minimal={true}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </FormGroup>
                    <Button icon={IconNames.UPDATED} intent={Intent.PRIMARY} type='submit'>
                        Update Problem
                    </Button>
                </form>
            </div>
        </CardContainer>
    </div>
);

export default withBreadcrumb('Config')(ProblemRepositoryGradingConfig);
