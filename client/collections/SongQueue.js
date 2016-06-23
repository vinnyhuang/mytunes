// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songs) {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    });

    // If we want to remove a specific (clicked on) song?
    this.on('dequeue', function() {
      this.remove(this.at(0));
    });

    this.on('enqueue', function(song) {
      this.add(song);
    });
  },
  playFirst: function() {
    this.at(0).play();
  }

});