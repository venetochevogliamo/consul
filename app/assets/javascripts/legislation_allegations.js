// Generated by CoffeeScript 1.12.6
(function() {
  "use strict";
  App.LegislationAllegations = {
    toggle_comments: function() {
      if (!App.LegislationAnnotatable.isMobile()) {
        $(".draft-allegation").toggleClass("comments-on");
        return $("#comments-box").html("").hide();
      }
    },
    show_comments: function() {
      if (!App.LegislationAnnotatable.isMobile()) {
        return $(".draft-allegation").addClass("comments-on");
      }
    },
    initialize: function() {
      $(".js-toggle-allegations .draft-panel").on({
        click: function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (!App.LegislationAnnotatable.isMobile()) {
            return App.LegislationAllegations.toggle_comments();
          }
        }
      });
      return $(".js-toggle-allegations").on({
        click: function() {
          if (!App.LegislationAnnotatable.isMobile()) {
            if ($(this).find(".draft-panel .panel-title:visible").length === 0) {
              return App.LegislationAllegations.toggle_comments();
            }
          }
        }
      });
    }
  };

}).call(this);
