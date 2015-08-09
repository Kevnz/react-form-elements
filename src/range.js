'use strict';
import React from 'react';
import { Component, PropTypes } from 'react';

export default class Range extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    getValue() {
        return this.state ? this.state.value : (this.props.value || this.props.defaultValue);
    }
    render() {
        let currentVal = this.getValue();
        return (
            <div className="form-row_container">
                <label>{this.props.label || ''}
                    <input type="range" {...this.props} ref="slider" onChange={this.handleChange} /> 
                    <span>{currentVal}</span>
                </label>
            </div>
        );
    }
}

Range.propTypes = { label: PropTypes.string, max: PropTypes.number, min: PropTypes.number, step: PropTypes.number };
Range.defaultProps = { defaultValue: 50, label: 'label', max: 100, min: 0, step: 1 };
