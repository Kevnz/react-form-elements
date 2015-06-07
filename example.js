require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var React = window.React = require('react');
var ReactFormElements = require('react-form-elements');

var TextBox = ReactFormElements.TextBox;
var DropDown = ReactFormElements.DropDown;
var Range = ReactFormElements.Range;
var Telephone = ReactFormElements.Telephone;

var App = React.createClass({
    displayName: 'App',

    handleClick: function handleClick(e) {
        e.preventDefault();
        var modalText = 'First::' + this.refs.first.getValue();
        modalText = modalText + '<br />Second::' + this.refs.second.getValue();
        modalText = modalText + '<br />Third::' + this.refs.third.getValue();
        modalText = modalText + '<br />Fourth::' + this.refs.fourth.getValue();
        modalText = modalText + '<br />Fifth::' + this.refs.fifth.getValue();
        modalText = modalText + '<br />Sixth::' + this.refs.sixth.getValue();
        modalText = modalText + '<br />Seventh::' + this.refs.seventh.getValue();
        console.log(modalText);
        this.refs.modalInner.getDOMNode().innerHTML = modalText;
        this.showModal();
    },
    showModal: function showModal() {
        this.refs.shim.getDOMNode().classList.remove('hidden');
        this.refs.modal.getDOMNode().classList.remove('hidden');
    },
    hideModal: function hideModal(e) {
        e.preventDefault();
        this.refs.shim.getDOMNode().classList.add('hidden');
        this.refs.modal.getDOMNode().classList.add('hidden');
        this.refs.modalInner.getDOMNode().innerHTML = '';
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                null,
                React.createElement(TextBox, { ref: 'first', label: 'MyTextbox', required: 'true', defaultValue: 'test' }),
                React.createElement(TextBox, { ref: 'second', label: 'MyOtherTextbox', placeholder: 'placeholder text' }),
                React.createElement(DropDown, { ref: 'third', label: 'Please Choose' }),
                React.createElement(TextBox, { ref: 'fourth' }),
                React.createElement(DropDown, { ref: 'fifth' }),
                React.createElement(Range, { ref: 'sixth', min: 0, max: 20, step: 2 }),
                React.createElement(Telephone, { ref: 'seventh' }),
                React.createElement(
                    'button',
                    { onClick: this.handleClick },
                    'Test'
                )
            ),
            React.createElement('div', { className: 'modal-shim hidden', ref: 'shim' }),
            React.createElement(
                'div',
                { className: 'modal hidden', ref: 'modal' },
                React.createElement('div', { ref: 'modalInner' }),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { onClick: this.hideModal },
                        'Close'
                    )
                )
            )
        );
    }
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-form-elements":undefined}]},{},[1]);
