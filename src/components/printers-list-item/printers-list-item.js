import React, { Fragment } from 'react';
import './printers-list-item.scss';

const PrintersListItem = ({ printer }) => {
    const { name, price } = printer;
    return (
        <Fragment>
            <span>{name}</span>
            <span>{price}</span>
        </Fragment>
    );


};

export default PrintersListItem;