var React = require('react');

var Menu = React.createClass({

  handleClick: function (e) {
    var text = e.target.value;  
    this.props.chooseVideo(text);  
  },

  render: function () {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="science" /> science
        <input type="radio" name="src" value="mathematics" /> mathematics
        <input type="radio" name="src" value="programming" /> programming
        <input type="radio" name="src" value="physics" /> physics
      </form>
    );
  }
});

module.exports = Menu;
