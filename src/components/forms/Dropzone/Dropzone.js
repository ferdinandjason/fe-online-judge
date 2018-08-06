import React from 'react';
import classNames from 'classnames';
import ReactDropzone from 'react-dropzone';
import { Tag, Intent } from '@blueprintjs/core';

import Styles from './Dropzone.scss';

class Dropzone extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show : false,
            files : [],
            rejected : [],
        };
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(acceptedFiles,rejectedFiles){
        this.setState({
            show : true,
            files : acceptedFiles,
            rejected : rejectedFiles,
        });
        console.log(this.props);
        this.props.handleDrop(acceptedFiles);
    }

    render(){
        return (
            <ReactDropzone
                onDrop={this.handleDrop}
                multiple
                accept={this.props.accept}
                className={Styles.DROPZONE}
            >
                <div className={Styles.DROPZONE_INSIDE}>
                    <p className={Styles.DROPZONE_INSIDE_INFO}>Drop files anywhere to upload</p>
                    <p className={Styles.DROPZONE_INSIDE_INFO_SMALL}>or</p>
                    <p className={Styles.DROPZONE_INSIDE_INFO}>Click anywhere to select files</p>
                </div>
                <div className={classNames({[Styles.DROPZONE_FILES] : this.state.show},{[Styles.DROPZONE_HIDE_FILES] : !this.state.show})}>
                    <div className={Styles.DROPZONE_FILES_ACCEPTED}>
                        <p className={Styles.DROPZONE_INSIDE_INFO_SMALL}>Uploading Files</p>
                        {
                            this.state.files.map(file => (
                                <Tag
                                    interactive={true}
                                    intent={Intent.SUCCESS}
                                    key={file.name}
                                    style={{margin:'2px'}}
                                >
                                    {file.name}
                                </Tag>
                            ))
                        }
                    </div>
                    <div className={Styles.DROPZONE_FILES_REJECTED}>
                        <p className={Styles.DROPZONE_INSIDE_INFO_SMALL}>Rejected Files</p>
                        {
                            this.state.rejected.map(file => (
                                <Tag
                                    interactive={true}
                                    intent={Intent.WARNING}
                                    key={file.name}
                                    style={{margin:'2px'}}
                                >
                                    {file.name}
                                </Tag>
                            ))
                        }
                    </div>
                </div>
            </ReactDropzone>
        )
    }
}

export default Dropzone;