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
        return this.state ? this.state.value : this.props.defaultValue;
    }
    render() {
        let val = this.getValue();
        return (
            <div className="form-row_container">
                <label>{this.props.label || ''}
                    <input {...this.props} ref="textbox" onChange={this.handleChange} value={val} />
                </label>
            </div>
        );
    }
}
TextBox.propTypes = { defaultValue: PropTypes.string, label: PropTypes.string, type: PropTypes.string };
TextBox.defaultProps = { defaultValue: '', type: 'text', label: 'label' };
