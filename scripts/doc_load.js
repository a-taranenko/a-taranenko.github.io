'use strict';

// Loads proper page content and indicator via listeners
$(document).ready(function() {
  // Home link/article listeners
  $("#home").on("click", function() {
    addArticleListener(this.id);
  });

  // About link/article listeners
  $("#about").on("click", function() {
    addArticleListener(this.id);
  });

  // Project link/article listeners
  $("#project").on("click", function() {
    addArticleListener(this.id);

    loadProjects();
  });

  // Contact link/article listeners
  $("#contact").on("click", function() {
    addArticleListener(this.id);
  });
});
