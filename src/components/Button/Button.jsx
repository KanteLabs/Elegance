import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
    COLORS,
    BUTTON_SIZES
} from '../../options'

class Button extends Component {
    static propTypes = {
        
        // Children could be a string or an element
        children:  PropTypes.node,

        // A button can have various colors
        color: PropTypes.oneOf([
            ...COLORS
        ]),

        raised: PropTypes.bool,
        
        size: PropTypes.oneOf([
            ...BUTTON_SIZES
        ]),

    }
    
    render(){
        const {
            children,
            color,  
            raised, 
            size
        } = this.props;

        const className = classNames(
            'ele',
            'button',
            color,
            size,
            raised ? 'raised' : ''
        )

        return(
            <button className={className}>
                { children ? children : null}
            </button>
        )
    }
}

Button.defaultProps = {
    color: 'blue',
    fontColor: 'white'
};

export default Button;