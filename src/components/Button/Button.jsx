import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    COLORS,
    FLAT_COLOR
} from '../../options'

class Button extends Component {
    static propTypes = {
        
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
        const style = {
            background: this.convertColor(),
            width: '100px',
            height: '100px'
        }
        return(
            <div style={style}>

            </div>
        )
    }
}

export default Button;