import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    COLORS,
    FLAT_COLOR
} from '../../options'

class Button extends Component {
    static propTypes = {
        
        // Children could be a string or an element
        children:  PropTypes.node,

        // A button can have various colors
        color: PropTypes.oneOf([
            ...COLORS,
            'red'
        ]),
        
    }
    
    convertColor = () => {
        const { color } = this.props;
        return FLAT_COLOR[color];
    }
    
    render(){
        console.log(this.props)
        const {children} = this.props;
        const style = {
            background: this.convertColor()
        }
        return(
            <button style={style}>
                { children ? children : null}
            </button>
        )
    }
}

export default Button;