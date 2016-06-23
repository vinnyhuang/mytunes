// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

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
    this.on('dequeue', function() {
      this.remove(this.at(0));
    }, this);

    this.on('enqueue', function(song) {
      console.log("songQueue enqueue");
      this.add(song);
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
  }

});