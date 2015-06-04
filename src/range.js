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
        return this.state ? this.state.value : '';
    }
    render() {
        return (
            <div className="form-row_container">
                <label>{this.props.label || ''}
                    <input type="range" {...this.props} ref="slider" onChange={this.handleChange} />
                </label>
            </div>
        );
    }
}

Range.propTypes = { label: PropTypes.string, max: PropTypes.number, min: PropTypes.number, step: PropTypes.number };
Range.defaultProps = { label: 'label', max: 100, min: 0, step: 1 };
