import React from 'react';
import { FileInput, Button, Intent } from '@blueprintjs/core';

import {CardContainer} from "../../../../../../../components";

export const MediaSingleProblemPage = (props) => (
    <CardContainer title={"Media"}>
        <h4> Upload New File </h4>
        <form>
            <div>
                <FileInput text={"Choose a File"}/>
            </div>
            <div style={{marginTop:'20px'}}>
                <Button text={"Upload"} icon={"export"} intent={Intent.PRIMARY}/>
            </div>
        </form>

        <h4> Files </h4>
        <table className="bp3-html-table .modifier bp3-small bp3-interactive">
            <thead>
            <tr>
                <th>Filename</th>
                <th>Uploaded</th>
                <th>Size</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </CardContainer>
);