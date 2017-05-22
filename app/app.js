var React = require('react');
var ReactDOM = require('react-dom');
var Video = require('./components/Video');
var Menu = require('./components/Menu');

var VIDEOS = {
  science: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/96/Curiosity%27s_Seven_Minutes_of_Terror.ogv/Curiosity%27s_Seven_Minutes_of_Terror.ogv.480p.webm',
  mathematics: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Elementary_Statistics_Video_Lecture_Discrete_Distributions.ogv/Elementary_Statistics_Video_Lecture_Discrete_Distributions.ogv.240p.webm',
  programming: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/61/Print_Wikipedia_%28no_subtitles%29.webm/Print_Wikipedia_%28no_subtitles%29.webm.480p.webm',
  physics: 'https://upload.wikimedia.org/wikipedia/commons/1/17/E_xy_deformation.webm'
};

var App = React.createClass({
  getInitialState: function () {
    return { src: VIDEOS.science };
  },

  chooseVideo: function (newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  },

  render: function () {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);