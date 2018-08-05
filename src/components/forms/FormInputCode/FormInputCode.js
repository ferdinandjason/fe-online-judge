import React from 'react';
import { FormGroup, MenuItem, Button } from "@blueprintjs/core";
import { Select } from '@blueprintjs/select';
import { IconNames } from '@blueprintjs/icons';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/python';
import 'brace/mode/csharp';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/kuroir';
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/textmate';
import 'brace/theme/terminal';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';

import {MODE,THEME} from "../../../config";
import {getIntent} from "../FormInputValidation";

import Styles from './FormInputCode.scss';

const filterMode = (query, mode) => {
    return `${mode.title}`.indexOf(query.toLowerCase()) >= 0;
};

const renderMode =(mode, {handleClick,modifiers,query}) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={mode.mode}
            key={mode.mode}
            onClick={handleClick}
            text={highlightText(mode.title, query)}
        />
    );
};

const modeSelectProps = {
    itemPredicate: filterMode,
    itemRenderer: renderMode,
    items: MODE,
};

const filterTheme = (query,theme) => {
    return `${theme.title}`.indexOf(query.toLowerCase()) >= 0;
};

const renderTheme = (theme,{handleClick,modifiers,query}) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={theme.theme}
            key={theme.theme}
            onClick={handleClick}
            text={highlightText(theme.title, query)}
        />
    );
};

const themeSelectProps = {
    itemPredicate: filterTheme,
    itemRenderer: renderTheme,
    items: THEME,
};


function escapeRegExpChars(text) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function highlightText(text, query) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

export class FormInputCode extends React.Component {
    static DEFAULT = 0;

    constructor(props){
        super(props);
        this.state = {
            mode : MODE[FormInputCode.DEFAULT],
            theme : THEME[FormInputCode.DEFAULT],
        }
    }

    handleChange = (value,event) => {
        console.log(event);
        this.props.input.onChange(value);
    };

    handleModeValueChange = (mode) =>{
        this.setState({mode});
    };

    handleThemeValueChange = (theme) => {
        this.setState({theme});
    };

    render(){
        const { mode, theme } = this.state;

        return (
            <FormGroup
                label={this.props.label}
                labelFor={this.props.input.name}
                labelInfo={this.props.labelInfo}
                intent={getIntent(this.props.meta)}
            >
                <div className={Styles.FORM_INPUT_CODE_SELECTOR}>
                    <Select
                        {...modeSelectProps}
                        noResults={<MenuItem disabled={true} text="No results." />}
                        onItemSelect={this.handleModeValueChange}
                        popoverProps={{ minimal:true }}
                        className={Styles.FORM_INPUT_CODE_SELECT}
                    >
                        <Button
                            icon={IconNames.CODE}
                            rightIcon={IconNames.CARET_DOWN}
                            text={mode ? `${mode.title}` : "(No selection)"}
                        />
                    </Select>
                    <Select
                        {...themeSelectProps}
                        noResults={<MenuItem disabled={true} text="No results." />}
                        onItemSelect={this.handleThemeValueChange}
                        popoverProps={{ minimal:true }}
                        className={Styles.FORM_INPUT_CODE_SELECT}
                    >
                        <Button
                            icon={IconNames.STYLE}
                            rightIcon={IconNames.CARET_DOWN}
                            text={theme ? `${theme.title}` : "(No selection)"}
                        />
                    </Select>
                </div>

                <AceEditor
                    {...this.props.input}
                    mode={this.state.mode.mode}
                    theme={this.state.theme.theme}
                    onChange={this.handleChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4,
                    }}
                    style={{
                        width:'100% !important',
                    }}
                />
            </FormGroup>
        )
    }
}