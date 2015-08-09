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

var _react = require('react');

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