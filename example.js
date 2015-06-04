require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var React = window.React = require('react');
var ReactFormElements = require('react-form-elements');

var TextBox = ReactFormElements.TextBox;
var DropDown = ReactFormElements.DropDown;
var Range = ReactFormElements.Range;

var App = React.createClass({
    displayName: 'App',

    handleClick: function handleClick(e) {
        e.preventDefault();
        console.log(this.refs.first.getValue());
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                null,
                React.createElement(TextBox, { ref: 'first', label: 'MyTextbox' }),
                React.createElement(TextBox, { ref: 'second', label: 'MyOtherTextbox', placeholder: 'placeholder text' }),
                React.createElement(DropDown, { ref: 'third', label: 'Please Choose' }),
                React.createElement(TextBox, { ref: 'forth' }),
                React.createElement(DropDown, { ref: 'fifth' }),
                React.createElement(Range, { ref: 'sixth', min: 0, max: 20, step: 2 }),
                React.createElement(Range, { ref: 'seventh' }),
                React.createElement(
                    'button',
                    { onClick: this.handleClick },
                    'Test'
                )
            )
        );
    }
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-form-elements":undefined}]},{},[1]);
