var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
DisplayInput = function (_React$Component) {_inherits(DisplayInput, _React$Component);
  function DisplayInput(props) {_classCallCheck(this, DisplayInput);return _possibleConstructorReturn(this, (DisplayInput.__proto__ || Object.getPrototypeOf(DisplayInput)).call(this,
    props));
  }_createClass(DisplayInput, [{ key: "render", value: function render()
    {
      return (

        React.createElement("div", { className: "header row", id: "display" },
          React.createElement("h1", { className: "text-right " }, React.createElement("span", { id: "number" }, this.props.value))));


    } }]);return DisplayInput;}(React.Component);var


CalculInput = function (_React$Component2) {_inherits(CalculInput, _React$Component2);function CalculInput() {_classCallCheck(this, CalculInput);return _possibleConstructorReturn(this, (CalculInput.__proto__ || Object.getPrototypeOf(CalculInput)).apply(this, arguments));}_createClass(CalculInput, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", null,
          React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-xs-6", id: "clear", onClick: this.props.clear }, "AC"),
            React.createElement("div", { className: "col-xs-3", id: "divide", onClick: this.props.change }, "/"),
            React.createElement("div", { className: "col-xs-3", id: "divide", onClick: this.props.change }, "*")),


          React.createElement("div", { className: "body row" },
            React.createElement("div", { className: "col-xs-9" },
              React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xs-4", id: "one", onClick: this.props.change }, "1"),
                React.createElement("div", { className: "col-xs-4", id: "two", onClick: this.props.change }, "2"),
                React.createElement("div", { className: "col-xs-4", id: "three", onClick: this.props.change }, "3")),

              React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xs-4", id: "four", onClick: this.props.change }, "4"),
                React.createElement("div", { className: "col-xs-4", id: "five", onClick: this.props.change }, "5"),
                React.createElement("div", { className: "col-xs-4", id: "six", onClick: this.props.change }, "6")),

              React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xs-4", id: "seven", onClick: this.props.change }, "7"),
                React.createElement("div", { className: "col-xs-4", id: "eight", onClick: this.props.change }, "8"),
                React.createElement("div", { className: "col-xs-4", id: "nine", onClick: this.props.change }, "9")),

              React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xs-6", id: "zero", onClick: this.handleChange }, "0"),
                React.createElement("div", { className: "col-xs-6", id: "decimal", onClick: this.props.change }, "."))),


            React.createElement("div", { className: "col-xs-3" },
              React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xs-12", id: "substract", onClick: this.handleChange }, "-               "),
                React.createElement("div", { className: "col-xs-12", id: "add", onClick: this.props.change }, "+                 "),
                React.createElement("div", { className: "col-xs-12", id: "equal", onClick: this.props.change }, "="))))));













    } }]);return CalculInput;}(React.Component);var



Calculator = function (_React$Component3) {_inherits(Calculator, _React$Component3);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this3 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this3.state = {
      value: 0,
      data: [] };

    _this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.handleClear = _this3.handleClear.bind(_this3);return _this3;
  }_createClass(Calculator, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({
        value: event.target.textContent });

    } }, { key: "handleClear", value: function handleClear()
    {
      this.setState({
        value: 0,
        data: [] });

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement(DisplayInput, { value: this.state.value }),
          React.createElement(CalculInput, { change: this.handleChange, clear: this.handleClear })));


    } }]);return Calculator;}(React.Component);



ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));