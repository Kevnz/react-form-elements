'use strict';
import React from 'react';
import { Component, PropTypes } from 'react';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    getValue() {
        let val = this.state ? this.state.value : this.refs.dropdown.getDOMNode().querySelector('option:first-child').value;
        return val;
    }
    render() {
        //var { options, ...otherProps } = this.props;
        let opts = (this.props.children || <option>Nope</option>);
        return (<div className="form-row_container">
                <label>{this.props.label}
                    <select {...this.props} ref="dropdown" onChange={this.handleChange} onSelect={this.handleChange} >
                        {opts}
                </select>
                </label>
            </div>);

    }
}


DropDown.propTypes = { children: PropTypes.node, label: PropTypes.string };
DropDown.defaultProps = { label: 'label' };
