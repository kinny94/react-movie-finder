var AppDispatcher = require('../dispatcher/appDispatcher');
var AppConstants = require('../constants/appConstants');

var AppActions = {
     searchMovies: function(movie){

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
     },

     receiveMovieResults: function(movies){
         console.log(movies);
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_MOVIES_RESULTS,
            movie: movie
        });
     }
}

module.exports = AppActions;