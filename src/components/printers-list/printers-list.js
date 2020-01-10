import React, {Component} from 'react';
import PrintersListItem from '../printers-list-item';

import './printers-list.scss';

export default class PrintersList extends Component{
    render(){
        const {printers} = this.props;
        return(
            <ul>
                {
                    printers.map((printer) =>{
                        return (
                            <li key={printer.id}><PrintersListItem printer ={printer} /></li>
                        )
                    })
                }
            </ul>
        )
    }
};