// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: 'table',
  
  initialize: function() {
    this.render();
    // this.collection.on('enqueue', function(song) {
    //   //this.$el.append(new SongQueueEntryView(song));
    //   this.render();
    //   console.log("rendered");
    // }, this);
    this.collection.on('add dequeue ended', function(song) {
      this.render();
    }, this);
  },

  events: {
    'enqueue': function(song) {
      this.collection.add(song);
      this.render();
    }
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
