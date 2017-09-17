var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var SearchForm = require('./searchForm.js');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <SearchForm />
            </div>
        )
    }
});

module.exports = App;