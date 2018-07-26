import React from 'react';
import { Hotkey, Hotkeys, HotkeysTarget, InputGroup, Icon, Classes, MenuItem } from'@blueprintjs/core';
import { Omnibar } from '@blueprintjs/select';
import { IconNames } from "@blueprintjs/icons";

import Styles from './OmnibarSearch.scss';

export default class OmnibarSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            resetOnSelect: true,
        }
    }

    renderHotkeys(){
        return (
            <Hotkeys>
                <Hotkey
                    allowInInput={true}
                    global={true}
                    combo={"shift+s"}
                    onKeyDown={this.handleToggle}
                />
            </Hotkeys>
        )
    }

    render(){
        return (
            <div>
                <InputGroup
                    type="search"
                    leftIcon="search"
                    placeholder="Search"
                    className={Styles.OMNIBAR_SEARCH_WRAPPER}
                    rightElement={(
                        <div style={{marginTop:'6px',marginRight:'4px'}}>
                            <span className={Classes.KEY_COMBO}><Icon icon={IconNames.KEY_SHIFT}/>S</span>
                        </div>
                    )}
                    onClick={this.handleClick}
                />

                <Omnibar
                    {...this.props.omnibarProps}
                    {...this.state}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.handleItemSelect}
                    onClose={this.handleClose}
                    className={Styles.OMNIBAR_WRAPPER}
                />

            </div>
        )
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({isOpen:true});
    };

    handleItemSelect = (item) => {
        console.log(item);
        this.setState({ isOpen: false });
    };

    handleClose = (event) => {
        event.preventDefault();
        this.setState({ isOpen: false });
    };

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({ isOpen: !this.state.isOpen });
    };
}