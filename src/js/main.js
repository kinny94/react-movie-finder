var App = require('./components/app.js');
var React = require('react');
var ReactDOM = require('react-dom');
var AppApi = require('./utils/appApi.js');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);