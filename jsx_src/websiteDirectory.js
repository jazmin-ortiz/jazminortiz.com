//TODO: understand this line
const e = React.createElement;

class WebsiteDirectory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // Create website directory, we do not want to include a link for the page
    // we are on in the directory. Also we need to distinguish between home and
    // other pages for the relative URLs in the directory.
    let websiteDirectory;
    if (this.props.pageName === "home") {
        websiteDirectory = 
            <React.Fragment>
                <a href="https://github.com/jazmin-ortiz" target="_blank"> Github Account </a>
                <br/>
                <a href="./resume/jortiz_resume_2015.pdf" > Very Old Resume </a>
                <br/>
                <a href="./csresearch/csresearch.html"> Undergrad CS Research </a>
                <br/>
                <a href="./mathresearch/mathresearch.html" >Undergrad Math Research </a>
                <br/>
            </React.Fragment>
    } else {
        websiteDirectory = 
            <React.Fragment>
                <a href="../home.html" > Home </a>
                <br/>
                <a href="https://github.com/jazmin-ortiz" target="_blank"> Github Account </a>
                <br/>
                <a href="../resume/jortiz_resume_2015.pdf" > Very Old Resume </a>
                <br/>
                {this.props.pageName === "csResearch" ?
                    '' :
                    <React.Fragment>
                        <a href="../csresearch/csresearch.html"> Undergrad CS Research </a>
                        <br/>
                    </React.Fragment>
                }
                {this.props.pageName === "mathResearch" ?
                    '' :
                    <React.Fragment>
                        <a href="../mathresearch/mathresearch.html" >Undergrad Math Research </a>
                        <br/>
                    </React.Fragment>
                }
            </React.Fragment>
    }

    return ( websiteDirectory );
  }

}

const domContainer = document.querySelector('.websiteDirectory');
const pageName = domContainer.dataset.pagename;
// TODO: understand this line more
const root = ReactDOM.createRoot(domContainer);
//TODO: understand the e here.
root.render(e(WebsiteDirectory, { pageName: pageName }));