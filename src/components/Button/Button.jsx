import React, { Component } from 'react';
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

        fontColor: PropTypes.oneOf([
            ...COLORS
        ]),
        
        size: PropTypes.oneOf([
            ...BUTTON_SIZES
        ]),
    }
    
    render(){
        console.log(this.props)
        const {children} = this.props;
        return(
            <button className={`ui button ${this.props.color} ${this.props.size}`}>
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