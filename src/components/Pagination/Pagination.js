import React from 'react';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import {Classes} from '@blueprintjs/core';

import Styles from './Pagination.scss';

class Pagination extends React.Component {
    getRange = () => {
        const {current_page, per_page} = this.props;
        return {
            start: (current_page - 1) * per_page + 1,
            end: (current_page) * per_page,
        }
    };
    renderText = () => {
        const {total} = this.props;
        const {start, end} = this.getRange();

        return (
            <p className={Styles.PAGINATION_HELPER_TEXT}>
                Showing {start}..{Math.min(end, total)} of {total} results
            </p>
        );
    };
    renderPagination = () => {
        const {current_page, total_pages} = this.props;
        return (
            <ReactPaginate
                initialPage={current_page}
                pageCount={total_pages}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                pageClassName={classNames(Styles.PAGINATION_ITEM, Classes.BUTTON)}
                previousLabel="<"
                nextLabel=">"
                pageLinkClassName={Styles.PAGINATION_LINK}
                nextLinkClassName={Styles.PAGINATION_LINK}
                previousLinkClassName={Styles.PAGINATION_LINK}
                breakClassName={classNames(Classes.BUTTON, Classes.DISABLED)}
                containerClassName={Classes.BUTTON_GROUP}
                activeClassName={classNames(Classes.BUTTON, Classes.ACTIVE, Styles.PAGINATION_ITEM)}
                previousClassName={classNames(Classes.BUTTON, Styles.PAGINATION_ITEM)}
                nextClassName={classNames(Classes.BUTTON, Styles.PAGINATION_ITEM)}
                onPageChange={this.props.onChangePage}
            />
        )
    }

    render() {
        return (
            <div className={Styles.PAGINATION}>
                {this.renderText()}
                {this.renderPagination()}
            </div>
        )
    }
}

export default Pagination;