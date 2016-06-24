// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  modelId: 'url',

  initialize: function(songs) {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    // If we want to remove a specific (clicked on) song?
    this.on('dequeue', function(song, food) {
      // console.log(arguments);
      console.log(song);
      console.log(food);
      var url = this.get('url');
      this.remove(url);
      var index = this.indexOf(song);
      this.remove(this.at(index));
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
  }

});