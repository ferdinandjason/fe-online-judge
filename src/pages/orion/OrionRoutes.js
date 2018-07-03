import React from 'react';
import { Icon } from '@blueprintjs/core';

import Sidebar from '../../components/Sidebar/Sidebar';

class OrionRoutes extends React.Component{
    constructor(props){
        super(props);
        this.content = [
            {
                type:'divider',
                props:{
                    title:'COMPETITION'
                }
            },
            {
                type:'item',
                href:'/competition/contest',
                props:{
                    icon:'calendar',
                    text:'Contest',
                    labelElement:<Icon icon={"share"}/>,
                }
            },
        ];
        this.tree = [
            {
                id: 0,
                hasCaret: true,
                icon: "folder-close",
                label: "Folder 0",
            },
            {
                id: 1,
                icon: "folder-close",
                isExpanded: true,
                label: 'asd',
                childNodes: [
                    {
                        id: 2,
                        icon: "document",
                        label: "Item 0"
                    },
                    {
                        id: 3,
                        icon: "tag",
                        label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
                    },
                    {
                        id: 4,
                        hasCaret: true,
                        icon: "folder-close",
                        label: 'asd',
                        childNodes: [
                            { id: 5, label: "No-Icon Item" },
                            { id: 6, icon: "tag", label: "Item 1" },
                            {
                                id: 7,
                                hasCaret: true,
                                icon: "folder-close",
                                label: "Folder 3",
                                childNodes: [
                                    { id: 8, icon: "document", label: "Item 0" },
                                    { id: 9, icon: "tag", label: "Item 1" },
                                ],
                            },
                        ],
                    },
                ],
            },
        ];
        this.state = {
            content : this.content,
            tree : this.tree,
        }
    }

    render(){
        return (
            <Sidebar items={this.state.content} nodes={this.state.tree} nodesTitle={"FOLDER"}/>
        );
    }
}

export default OrionRoutes;