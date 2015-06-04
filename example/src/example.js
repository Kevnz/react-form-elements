'use strict';
var React = window.React = require('react');
var ReactFormElements = require('react-form-elements');

var TextBox = ReactFormElements.TextBox;
var DropDown = ReactFormElements.DropDown;
var Range = ReactFormElements.Range;
var Telephone = ReactFormElements.Telephone;


var App = React.createClass({
    handleClick (e) {
        e.preventDefault();
        let modalText = 'First::' + this.refs.first.getValue();
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
    showModal() {
        this.refs.modal.getDOMNode().classList.remove('hidden');
    },
    hideModal(e) {
        e.preventDefault();
        this.refs.modal.getDOMNode().classList.add('hidden');
        this.refs.modalInner.getDOMNode().innerHTML = '';
    },
    render () {
        return (
            <div>
                <form>
                    <TextBox ref="first" label="MyTextbox" />
                    <TextBox ref="second" label="MyOtherTextbox" placeholder="placeholder text" />
                    <DropDown ref="third" label="Please Choose" />
                    <TextBox ref="fourth" />
                    <DropDown ref="fifth" />
                    <Range ref="sixth" min={0} max={20} step={2} />
                    <Telephone ref="seventh" />
                    <button onClick={this.handleClick}>Test</button>
                </form>
                <div className="modal hidden" ref="modal">
                    <div ref="modalInner">
                    </div>
                    <div>
                        <button onClick={this.hideModal}>Close</button>
                    </div>
                </div>
            </div>

        );
    }
});

React.render(<App />, document.getElementById('app'));
