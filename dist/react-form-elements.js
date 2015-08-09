(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactFormElements = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _textbox = require('./textbox');

var _textbox2 = _interopRequireDefault(_textbox);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _telephone = require('./telephone');

var _telephone2 = _interopRequireDefault(_telephone);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

exports.TextBox = _textbox2['default'];
exports.TextArea = _textarea2['default'];
exports.DropDown = _dropdown2['default'];
exports.CheckBox = _checkbox2['default'];
exports.Telephone = _telephone2['default'];
exports.Range = _range2['default'];

},{"./checkbox":2,"./dropdown":3,"./range":4,"./telephone":5,"./textarea":6,"./textbox":7}],2:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var CheckBox = (function (_Component) {
    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        _get(Object.getPrototypeOf(CheckBox.prototype), 'constructor', this).call(this, props);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(CheckBox, _Component);

    _createClass(CheckBox, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state ? this.state.value : '';
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('input', _extends({ type: 'checkbox' }, this.props, { ref: 'checkbox', onChange: this.handleChange }));
        }
    }]);

    return CheckBox;
})(_react.Component);

exports['default'] = CheckBox;

CheckBox.propTypes = { label: _react.PropTypes.string };
CheckBox.defaultProps = { label: 'label' };
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var DropDown = (function (_Component) {
    function DropDown(props) {
        _classCallCheck(this, DropDown);

        _get(Object.getPrototypeOf(DropDown.prototype), 'constructor', this).call(this, props);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(DropDown, _Component);

    _createClass(DropDown, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var val = this.state ? this.state.value : this.refs.dropdown.getDOMNode().querySelector('option:first-child').value;
            return val;
        }
    }, {
        key: 'render',
        value: function render() {
            //var { options, ...otherProps } = this.props;
            var opts = this.props.children || _react2['default'].createElement(
                'option',
                null,
                'Nope'
            );
            return _react2['default'].createElement(
                'div',
                { className: 'form-row_container' },
                _react2['default'].createElement(
                    'label',
                    null,
                    this.props.label,
                    _react2['default'].createElement(
                        'select',
                        _extends({}, this.props, { ref: 'dropdown', onChange: this.handleChange, onSelect: this.handleChange }),
                        opts
                    )
                )
            );
        }
    }]);

    return DropDown;
})(_react.Component);

exports['default'] = DropDown;

DropDown.propTypes = { children: _react.PropTypes.node, label: _react.PropTypes.string };
DropDown.defaultProps = { label: 'label' };
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var Range = (function (_Component) {
    function Range(props) {
        _classCallCheck(this, Range);

        _get(Object.getPrototypeOf(Range.prototype), 'constructor', this).call(this, props);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(Range, _Component);

    _createClass(Range, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state ? this.state.value : this.props.value || this.props.defaultValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var currentVal = this.getValue();
            return _react2['default'].createElement(
                'div',
                { className: 'form-row_container' },
                _react2['default'].createElement(
                    'label',
                    null,
                    this.props.label || '',
                    _react2['default'].createElement('input', _extends({ type: 'range' }, this.props, { ref: 'slider', onChange: this.handleChange })),
                    _react2['default'].createElement(
                        'span',
                        null,
                        currentVal
                    )
                )
            );
        }
    }]);

    return Range;
})(_react.Component);

exports['default'] = Range;

Range.propTypes = { label: _react.PropTypes.string, max: _react.PropTypes.number, min: _react.PropTypes.number, step: _react.PropTypes.number };
Range.defaultProps = { defaultValue: 50, label: 'label', max: 100, min: 0, step: 1 };
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _textbox = require('./textbox');

var _textbox2 = _interopRequireDefault(_textbox);

var Telephone = (function (_TextBox) {
    function Telephone(props) {
        _classCallCheck(this, Telephone);

        _get(Object.getPrototypeOf(Telephone.prototype), 'constructor', this).call(this, props);
    }

    _inherits(Telephone, _TextBox);

    return Telephone;
})(_textbox2['default']);

exports['default'] = Telephone;

Telephone.defaultProps = { type: 'tel', label: 'Telephone Number' };
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./textbox":7}],6:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var TextArea = (function (_Component) {
    function TextArea(props) {
        _classCallCheck(this, TextArea);

        _get(Object.getPrototypeOf(TextArea.prototype), 'constructor', this).call(this, props);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(TextArea, _Component);

    _createClass(TextArea, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state ? this.state.value : this.props.children;
        }
    }, {
        key: 'render',
        value: function render() {
            var val = this.getValue();
            return _react2['default'].createElement(
                'div',
                { className: 'form-row_container' },
                _react2['default'].createElement(
                    'label',
                    null,
                    this.props.label || '',
                    _react2['default'].createElement(
                        'textarea',
                        _extends({}, this.props, { ref: 'textarea', onChange: this.handleChange }),
                        this.props.children
                    )
                )
            );
        }
    }]);

    return TextArea;
})(_react.Component);

exports['default'] = TextArea;

TextArea.propTypes = { defaultValue: _react.PropTypes.string, label: _react.PropTypes.string, type: _react.PropTypes.string };
TextArea.defaultProps = { type: 'text', label: 'label' };
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var TextBox = (function (_Component) {
    function TextBox(props) {
        _classCallCheck(this, TextBox);

        _get(Object.getPrototypeOf(TextBox.prototype), 'constructor', this).call(this, props);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(TextBox, _Component);

    _createClass(TextBox, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state ? this.state.value : this.props.defaultValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var val = this.getValue();
            return _react2['default'].createElement(
                'div',
                { className: 'form-row_container' },
                _react2['default'].createElement(
                    'label',
                    null,
                    this.props.label || '',
                    _react2['default'].createElement('input', _extends({}, this.props, { ref: 'textbox', onChange: this.handleChange, value: val }))
                )
            );
        }
    }]);

    return TextBox;
})(_react.Component);

exports['default'] = TextBox;

TextBox.propTypes = { defaultValue: _react.PropTypes.string, label: _react.PropTypes.string, type: _react.PropTypes.string };
TextBox.defaultProps = { defaultValue: '', type: 'text', label: 'label' };
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});