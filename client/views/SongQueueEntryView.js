// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  events: {
    'click': function() {
      // this.model.trigger('enqueue');
      this.model.trigger('dequeue', this.model, 'bibimbop');
      // this.model.dequeue();
    }
  },
  
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
