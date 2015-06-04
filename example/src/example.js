'use strict';
var React = window.React = require('react');
var ReactFormElements = require('react-form-elements');

var TextBox = ReactFormElements.TextBox;
var DropDown = ReactFormElements.DropDown;
var Range = ReactFormElements.Range;

var App = React.createClass({
    handleClick (e) {
        e.preventDefault();
        console.log(this.refs.first.getValue());
    },
    render () {
        return (
            <div>
                <form>
                    <TextBox ref="first" label="MyTextbox" />
                    <TextBox ref="second" label="MyOtherTextbox" placeholder="placeholder text" />
                    <DropDown ref="third" label="Please Choose" />
                    <TextBox ref="forth" />
                    <DropDown ref="fifth" />
                    <Range ref="sixth" min={0} max={20} step={2} />
                    <Range ref="seventh" />
                    <button onClick={this.handleClick}>Test</button>
                </form>
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));
