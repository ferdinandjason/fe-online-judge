import React from 'react';
import {CardContainer, withBreadcrumb} from "../../../../../../../../components";
import {DropzoneContainer} from "../../../../../../../../components/forms";

const ChangeAvatar = (props) => (
    <CardContainer title={'Change Avatar'}>
        <h3>Upload new Avatar</h3>
        <DropzoneContainer url={'/'} accept={'image/*'}/>
    </CardContainer>
);

export default withBreadcrumb('Change Avatar')(ChangeAvatar);