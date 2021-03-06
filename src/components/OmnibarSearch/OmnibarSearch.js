import React from 'react';
import {Hotkey, Hotkeys, InputGroup, MenuItem} from '@blueprintjs/core';
import {Omnibar} from '@blueprintjs/select';

import Styles from './OmnibarSearch.scss';

export default class OmnibarSearch extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        this.setState({isOpen: true});
    };
    handleItemSelect = (item) => {
        console.log(item);
        this.setState({isOpen: false});
    };
    handleClose = (event) => {
        event.preventDefault();
        this.setState({isOpen: false});
    };
    handleToggle = (event) => {
        event.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            resetOnSelect: true,
        }
    }

    renderHotkeys() {
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

    render() {
        return (
            <div>
                <InputGroup
                    type="search"
                    leftIcon="search"
                    placeholder="Search"
                    className={Styles.OMNIBAR_SEARCH_WRAPPER}
                    onClick={this.handleClick}
                />

                <Omnibar
                    {...this.props.omnibarProps}
                    {...this.state}
                    noResults={<MenuItem disabled={true} text="No results."/>}
                    onItemSelect={this.handleItemSelect}
                    onClose={this.handleClose}
                    className={Styles.OMNIBAR_WRAPPER}
                />

            </div>
        )
    }
}