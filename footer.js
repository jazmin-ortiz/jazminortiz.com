var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO: understand this line
var e = React.createElement;

var AttributionSection = function (_React$Component) {
  _inherits(AttributionSection, _React$Component);

  function AttributionSection(props) {
    _classCallCheck(this, AttributionSection);

    return _possibleConstructorReturn(this, (AttributionSection.__proto__ || Object.getPrototypeOf(AttributionSection)).call(this, props));
  }

  _createClass(AttributionSection, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "p",
        null,
        "Seal icon used as favicon for my website is from\xA0",
        React.createElement(
          "a",
          { href: "https://thenounproject.com/heyrabbit/", target: "_blank" },
          "Hey Rabbit"
        ),
        "\xA0and found on\xA0",
        React.createElement(
          "a",
          { href: "https://thenounproject.com", target: "_blank" },
          "thenounproject"
        ),
        "\xA0. This icon was used under a\xA0",
        React.createElement(
          "a",
          { href: "https://creativecommons.org/licenses/by/3.0/us/legalcode", target: "_blank" },
          "Creative Commons license"
        ),
        "."
      );
    }
  }]);

  return AttributionSection;
}(React.Component);

var domContainer = document.querySelector('footer');
// TODO: understand this line more
var root = ReactDOM.createRoot(domContainer);
//TODO: understand the e here.
root.render(e(AttributionSection));