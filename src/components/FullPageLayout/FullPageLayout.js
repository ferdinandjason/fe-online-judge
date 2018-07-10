import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Sidebar, Breadcrumb } from '../../components';
import { Button } from '@blueprintjs/core';

import style from './FullPageLayout.scss';

export const FullPageLayout = (props)=> {
    return (
        <div className={style.page_layout_container}>
            <Sidebar items={props.sidebarContent}/>
            <div>
                <div className={style.page_layout_header_container}>
                    <div className={"pt-navbar-group pt-align-left "}>
                        <Breadcrumb breadcrumbs={props.breadcrumbs}/>
                    </div>
                    {
                        (props.problemTitle)?
                            <div className={style.page_layout_title}>
                                {props.problemTitle}
                            </div>
                            :
                            null
                    }
                    <div className={classNames("pt-navbar-group","pt-align-right",style.page_layout_button_wrapper)}>
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

FullPageLayout.propType = {
    sidebarContent : PropTypes.arrayOf(PropTypes.object()).isRequired,
    breadcrumbs : PropTypes.arrayOf(PropTypes.object()).isRequired,
    problemTitle : PropTypes.string,
    buttons : PropTypes.arrayOf({props: PropTypes.object()}).isRequired,
};