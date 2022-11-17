//TODO: understand this line
const e = React.createElement;

class AttributionSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
            <p>
                Seal icon used as favicon for my website is from&nbsp;
                <a href="https://thenounproject.com/heyrabbit/" target="_blank">Hey Rabbit</a>
                &nbsp;and found on&nbsp;
                <a href="https://thenounproject.com" target="_blank">thenounproject</a>
                &nbsp;. This icon was used under a&nbsp;
                 <a href="https://creativecommons.org/licenses/by/3.0/us/legalcode" target="_blank">Creative Commons license</a>
                .
            </p>
            );
  }

}

const domContainer = document.querySelector('footer');
// TODO: understand this line more
const root = ReactDOM.createRoot(domContainer);
//TODO: understand the e here.
root.render(e(AttributionSection));