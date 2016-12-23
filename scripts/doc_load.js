'use strict';

let windowWidth;
let windowWidthChange;

// Loads proper page content and indicator via listeners
$(document).ready(function() {
  // Loads project info from a file or database
  loadProjects();

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
  });

  // Contact link/article listeners
  $("#contact").on("click", function() {
    addArticleListener(this.id);
  });

  windowWidth = $(window).width();

  // Adjusts page content if the window is resized
  $(window).resize(function() {
    $(".content-wrapper").scrollTo(`#${$("p.indicator").attr("id")}-container-outer`);

    if (windowWidth >= 960 && $(window).width() >= 960) {
      windowWidthChange = windowWidth - $(window).width();

      $("#page-indicator").animate({ "left": `-=${windowWidthChange/2}px` }, 0);
    } else if (windowWidth > 960 && $(window).width() < 960) {
      windowWidthChange = windowWidth - 960;

      $("#page-indicator").animate({ "left": `-=${windowWidthChange/2}px` }, 0);
    } else if (windowWidth < 960 && $(window).width() > 960) {
      windowWidthChange = 960 - $(window).width();

      $("#page-indicator").animate({ "left": `-=${windowWidthChange/2}px` }, 0);
    }

    windowWidth = $(window).width();
  });
});
