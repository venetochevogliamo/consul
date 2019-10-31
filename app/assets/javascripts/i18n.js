(function() {
  "use strict";
  App.I18n = {
    pluralize: function(texts, count) {
      return this.raw_text(texts, count).replace("%{count}", count);
    },
    raw_text: function(texts, count) {
      switch (count) {
      case 0:
        return texts.zero;
      case 1:
        return texts.one;
      default:
        return texts.other;
      }
    }
  };
}).call(this);
