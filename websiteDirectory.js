var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO: understand this line
var e = React.createElement;

var WebsiteDirectory = function (_React$Component) {
    _inherits(WebsiteDirectory, _React$Component);

    function WebsiteDirectory(props) {
        _classCallCheck(this, WebsiteDirectory);

        return _possibleConstructorReturn(this, (WebsiteDirectory.__proto__ || Object.getPrototypeOf(WebsiteDirectory)).call(this, props));
    }

    _createClass(WebsiteDirectory, [{
        key: "render",
        value: function render() {

            // Create website directory, we do not want to include a link for the page
            // we are on in the directory. Also we need to distinguish between home and
            // other pages for the relative URLs in the directory.
            var websiteDirectory = void 0;
            if (this.props.pageName === "home") {
                websiteDirectory = React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        "a",
                        { href: "https://github.com/jazmin-ortiz", target: "_blank" },
                        " Github Account "
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "a",
                        { href: "./resume/jortiz_resume_2015.pdf" },
                        " Very Old Resume "
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "a",
                        { href: "./csresearch/csresearch.html" },
                        " Undergrad CS Research "
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "a",
                        { href: "./mathresearch/mathresearch.html" },
                        "Undergrad Math Research "
                    ),
                    React.createElement("br", null)
                );
            } else {
                websiteDirectory = React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        "a",
                        { href: "../home.html" },
                        " Home "
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "a",
                        { href: "https://github.com/jazmin-ortiz", target: "_blank" },
                        " Github Account "
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "a",
                        { href: "../resume/jortiz_resume_2015.pdf" },
                        " Very Old Resume "
                    ),
                    React.createElement("br", null),
                    this.props.pageName === "csResearch" ? '' : React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            "a",
                            { href: "../csresearch/csresearch.html" },
                            " Undergrad CS Research "
                        ),
                        React.createElement("br", null)
                    ),
                    this.props.pageName === "mathResearch" ? '' : React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            "a",
                            { href: "../mathresearch/mathresearch.html" },
                            "Undergrad Math Research "
                        ),
                        React.createElement("br", null)
                    )
                );
            }

            return websiteDirectory;
        }
    }]);

    return WebsiteDirectory;
}(React.Component);

var domContainer = document.querySelector('.websiteDirectory');
var pageName = domContainer.dataset.pagename;
// TODO: understand this line more
var root = ReactDOM.createRoot(domContainer);
//TODO: understand the e here.
root.render(e(WebsiteDirectory, { pageName: pageName }));