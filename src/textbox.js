'use strict';
import React from 'react';
import { Component, PropTypes } from 'react';

export default class TextBox extends Component {
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
                    <input {...this.props} ref="textbox" onChange={this.handleChange} />
                </label>
            </div>
        );
    }
}
TextBox.propTypes = { label: PropTypes.string, type: PropTypes.string };
TextBox.defaultProps = { type: 'text', label: 'label' };
