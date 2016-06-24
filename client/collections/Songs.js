// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs',

  initialize: function() {
    this.fetch();
    console.log(this);
    console.log('populated');
  },

  parse: function(response) {
    return response.results;
  }

});