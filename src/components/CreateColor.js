import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
    statis propTypes = {
        addColor: PropTypes.func.isRequired
    };

    state = {
        name: undefined,
        color: undefined
    }

    handleClick = event => {
        event.preventDefault();
        const { name, color } = this.state;
        this.props.addColor({ name, hex: color });
    }

    handleChange = ({ target }) => {
        
    }

}

CreateColor.propTypes = {

}