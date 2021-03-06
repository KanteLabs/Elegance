import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
    HEADER_SIZE
} from '../../options'

class Header extends Component {
    static propTypes = {
        
        // Children could be a string or an element
        children:  PropTypes.node,
        
        size: PropTypes.oneOf([
            ...HEADER_SIZE
        ])
    }
    
    render(){
        const {
            children,
            size
        } = this.props;

        const className = classNames(
            'ele',
            'header'
        )

        const HeaderSize = size.toLowerCase();

        return(
            <HeaderSize className={className}>
                { children ? children : null}
            </HeaderSize>
        )
    }
}

Header.defaultProps = {
    size: 'h1'
};

export default Header;