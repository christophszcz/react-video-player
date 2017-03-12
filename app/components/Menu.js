var React = require('react');

var Menu = React.createClass({
  render: function () {
    return (
      <form>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
});

module.exports = Menu;
