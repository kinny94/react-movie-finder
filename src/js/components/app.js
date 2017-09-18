var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var SearchForm = require('./searchForm.js');

function getAppState(){
    return {

    }
}

var App = React.createClass({

    getInitialState: function(){
        return getAppState();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    render: function(){
        return(
            <div>
                <SearchForm />
            </div>
        )
    },

    _onChange: function(){
        this.setState(getAppState());
    }
});

module.exports = App;