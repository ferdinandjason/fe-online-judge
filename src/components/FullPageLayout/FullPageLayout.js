import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

import { Button } from '@blueprintjs/core';

import style from './FullPageLayout.scss';

const FullPageLayout = (props)=> {
    console.log('asd');
    console.log(props);
    return (
        <div className={style.page_layout_container}>
            <Sidebar items={props.sidebarContent}/>
            <div>
                <div className={style.page_layout_header_container}>
                    <div className={"pt-navbar-group pt-align-left "}>

                    </div>
                    <div className={"pt-navbar-group pt-align-right "+style.page_layout_button_wrapper}>
                        {
                            props.buttons.map(button => {
                                return <Button {...button.props}/>
                            })
                        }
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
};

export default FullPageLayout;