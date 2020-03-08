
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <button onClick={() => this.setState({ piaciuto: true })}>
    Mi Piace
  </button>
    );
  }
}

const domContainer = document.getElementById('contenitore-bottone-pages');
ReactDOM.render(e(LikeButton), domContainer);
