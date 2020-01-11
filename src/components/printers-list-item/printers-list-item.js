import React, { Fragment } from 'react';
import './printers-list-item.scss';

const PrintersListItem = ({ printer }) => {
    const { name, price, coverImage } = printer;
    return (
        
        <Fragment>
            <img src ={coverImage} alt="cover" />
            <span>{name}</span>
            <span>{price}</span>
        </Fragment>
    );


};

export default PrintersListItem;