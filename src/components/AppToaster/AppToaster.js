import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Classes, Intent, Position, ProgressBar, Toast, Toaster} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {store} from "../../modules/store";
import {AddKeyToastFile, GetKeyToastFile, GetPercentageToastFile} from "../../modules/redux/toastFile";

class AppToaster extends Component {
    constructor(props) {
        super(props);
        this.toaster = null;

        this.refHandlers = {
            toaster: (ref) => (this.toaster = ref)
        };

        this.state = {
            toaster: {
                autoFocus: false,
                canEscapeKeyClear: true,
                position: Position.TOP,
            },
            toast: [],
        }
    }

    static renderFileUploadProgress(amount, filename) {
        return {
            action: {
                text: filename,
            },
            icon: IconNames.CLOUD_UPLOAD,
            message: (
                <ProgressBar
                    className={classNames({[Classes.PROGRESS_NO_STRIPES]: amount >= 100})}
                    intent={amount < 100 ? Intent.PRIMARY : Intent.SUCCESS}
                    value={amount / 100}
                />
            ),
            timeout: amount < 100 ? 0 : 3000,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('toast',nextProps);
        if (nextProps.toastFile.filename !== null && nextProps.toastFile.key === null) {
            const key = this.toaster.show(AppToaster.renderFileUploadProgress(0, nextProps.toastFile.filename));
            store.dispatch(AddKeyToastFile(key));
        } else if (nextProps.toastFile.filename !== null && nextProps.toastFile.key !== null) {
            const key = GetKeyToastFile();
            const percentage = GetPercentageToastFile();
            this.toaster.show(AppToaster.renderFileUploadProgress(percentage, nextProps.toastFile.filename), key);
        } else {
            this.toaster.show(nextProps.toast);
        }
    }

    render() {
        return (
            <Toaster {...this.state.toaster} ref={this.refHandlers.toaster}>
                {this.state.toast.map(toast => <Toast {...toast}/>)}
            </Toaster>
        )
    }
}

const mapStateToProps = (state) => ({
    toast: state.toast,
    toastFile: state.toastFile,
});

export default connect(mapStateToProps)(AppToaster);