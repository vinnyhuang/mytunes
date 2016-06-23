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
  },

  events: {
    'enqueue': function(song) {
      this.collection.add(song);
      this.render();
    }  
    /*click: function() {
      //this.model.enqueue();
      this.model.enqueue();
    },
    added: function() {
      this.render();
    },
    play: function() {
      this.render();
    }*/
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
