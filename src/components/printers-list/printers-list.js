import React, {Component} from 'react';
import PrintersListItem from '../printers-list-item';
import {connect} from 'react-redux';
import {withPrintersstoreService} from '../hoc';

import  './printers-list.scss';

class PrintersList extends Component{

    componentDidMount(){}

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

const mapStateToProps = ({printers}) =>{

    return{printers};
    
    };

export default withPrintersstoreService()(connect(mapStateToProps)( PrintersList));