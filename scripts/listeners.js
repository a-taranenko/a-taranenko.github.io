'use strict';

let indicatorListener = 0;

// Function that builds HTML for each project
function appendProject(project) {
  let $feed = `<div class="single-project-container">
    <div class="project-header">
      <div id="${project.id}" class="project-description pointer">
        <span class="project-name">${project.name}</span>
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        <span class="project-techs">${project.techs}</span>
      </div>
      <div class=github-container>
        <a href="https://github.com/${project.endpoint}" class="pointer">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="${project.class} hidden project-data">${project.data}</div>
    </div>`;

  return $feed;
}

// Function that attaches event listeners to all projects
function addProjectListener(project) {
  // On click will show or hide project description box
  $(`#${project.id}`).on("click", function() {
    if ( $(`.${project.class}`).is(":hidden") ) {
      $(`.${project.class}`).slideDown(500);
      // $(`.${project.class}`).show();

      // All other project boxes are hidden when a current project is selected
      projects.forEach(function(projectInner) {
        if (projectInner.endpoint !== project.endpoint && $(`.${projectInner.class}`).is(":visible")) {
          $(`.${projectInner.class}`).slideUp(500);
          // $(`.${projectInner.class}`).hide();
        }
      });
    } else {
      $(`.${project.class}`).slideUp(500);
      // $(`.${project.class}`).hide();
    }
  });
}

// Builds HTML and creates event listeners for all projects
function loadProjects() {
  $("#project-list-container").empty();

  projects.forEach(function(project) {
    $("#project-list-container").append(appendProject(project));

    addProjectListener(project);
  });
}

// Adds a CSS class to a clicked navigation element that indicates which page is displayed
function addArticleListener(article) {
  let newElementPosition = $(`#${article}`).position().left;
  let oldElementPosition = $(".indicator").position().left;
  let moveBy = newElementPosition - oldElementPosition;

  if (indicatorListener === 0) {
    $("#page-indicator")
      .animate(
        { "left": `-=${$("#page-indicator").position().left-oldElementPosition-parseInt($(".indicator").css("margin-left"))}px`,
          "width": `${$(".indicator").css("width")}` }, 0)
      .css("background-color", "white");

    $(".nav-links").css("border-color", "#3a73a9");

    indicatorListener++;
  }
  $("#page-indicator").animate({ "left": `+=${moveBy}px`, "width": `${$(`#${article}`).css("width")}` }, 800);

  $(".nav-links").removeClass("indicator");
  $(`#${article}`).addClass("indicator");

  $(".content-wrapper").scrollTo($(`#${article}-container-outer`), 800);
}
