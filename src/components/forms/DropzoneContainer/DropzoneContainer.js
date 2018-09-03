import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Dropzone from "../Dropzone/Dropzone";
import {FileUpload} from "../../../modules/api/request";
import {selectToken} from "../../../modules/dispatcher/session";
import {Toast} from "../../../modules/dispatcher/toast";

class DropzoneContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(files) {
        const uploadFiles = files.map(file => {
            const token = selectToken();
            return this.props.uploadFile(this.props.url, token, file);
        });

        axios.all(uploadFiles).then(() => {
            Toast.success('Success uploaded all File!');
        })
    };

    render() {
        return <Dropzone {...this.props} handleDrop={this.handleDrop}/>
    }
}

function createDropzoneContainer() {
    const mapDispatchToProps = {
        uploadFile: (url, token, file) => FileUpload(url, token, file),
    };
    return connect(undefined, mapDispatchToProps)(DropzoneContainer);
}

export default createDropzoneContainer();