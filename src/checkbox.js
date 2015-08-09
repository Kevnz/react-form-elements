'use strict';
import React from 'react';
import { Component, PropTypes } from 'react';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    getValue() {
        return this.state ? this.state.value : '';
    }
    isValid() {
        return true;
    }
    render() {
        return (
            <input type="checkbox" {...this.props} ref="checkbox" onChange={this.handleChange} />
        );
    }
}
CheckBox.propTypes = { label: PropTypes.string };
CheckBox.defaultProps = { label: 'label' };
