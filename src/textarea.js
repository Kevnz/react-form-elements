'use strict';
import React from 'react';
import { Component, PropTypes } from 'react';

export default class TextArea extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    getValue() {
        return this.state ? this.state.value : this.props.children;
    }
    render() {
        let val = this.getValue();
        return (
            <div className="form-row_container">
                <label>{this.props.label || ''}
                    <textarea {...this.props} ref="textarea" onChange={this.handleChange} >
                    {this.props.children}
                    </textarea>
                </label>
            </div>
        );
    }
}
TextArea.propTypes = { defaultValue: PropTypes.string, label: PropTypes.string, type: PropTypes.string };
TextArea.defaultProps = {  type: 'text', label: 'label' };
