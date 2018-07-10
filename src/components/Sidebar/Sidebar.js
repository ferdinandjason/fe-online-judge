import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Menu, MenuItem, MenuDivider, Tree } from '@blueprintjs/core';

import style from './Sidebar.scss';

export class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            items: this.props.items,
            nodes: this.props.nodes,
            nodesTitle : this.props.nodesTitle,
        }
    }

    render(){
        return (
            <Menu className={style.sidebar}>
                <div className={style.sidebar_none}>  </div>
                <MenuDivider/>
                {
                    this.state.items.map(item=>{
                        if(item.type === 'divider'){
                            return (
                                <MenuDivider {...item.props}/>
                            )
                        } else {
                            return (
                                <Link to={item.href} className={style.sidebar_link} key={item.props.key}>
                                    <MenuItem {...item.props} />
                                </Link>
                            )
                        }
                    })
                }
                <MenuDivider title={this.state.nodesTitle}/>
                <Tree
                    contents={this.state.nodes}
                    onNodeClick={this.handleNodeClick}
                    onNodeCollapse={this.handleNodeCollapse}
                    onNodeExpand={this.handleNodeExpand}
                />
            </Menu>
        );
    }

    handleNodeClick = (nodeData, _nodePath, e) => {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.nodes, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state);
    };

    handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false;
        this.setState(this.state);
    };

    handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true;
        this.setState(this.state);
    };

    forEachNode(nodes,callback) {
        if (nodes == null) {
            return;
        }

        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes, callback);
        }
    }
}

Sidebar.propTypes = {
    items : PropTypes.arrayOf({
        type : PropTypes.string.isRequired,
        href : PropTypes.string.isRequired,
        props : PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
    nodes : PropTypes.arrayOf(PropTypes.object),
    nodesTitle : PropTypes.arrayOf(PropTypes.object),
};