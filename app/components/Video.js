var React = require('react');

var Video = React.createClass({
  render: function () {
    return (
      <div>
        <video controls autostart autoplay />
      </div>
    );
  }
});

module.exports = Video;