import React from 'react';

import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

class WYSIWYGEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            model : props.text,
        };
        this.handleModelChange = this.handleModelChange.bind(this);
        console.log(FroalaEditor);
    }

    handleModelChange = (model) => {
        this.setState({model});
    };

    render(){
        return (
            <FroalaEditor
                model={this.state.model}
                onModelChange={this.handleModelChange}
            />
        )
    }
}

export default WYSIWYGEditor;