'use strict';

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
      // $(`.${project.class}`).slideDown("slow");
      $(`.${project.class}`).show();

      // All other project boxes are hidden when a current project is selected
      projects.forEach(function(projectInner) {
        if (projectInner.endpoint !== project.endpoint && $(`.${projectInner.class}`).is(":visible")) {
          // $(`.${projectInner.class}`).slideUp("slow");
          $(`.${projectInner.class}`).hide();
        }
      });
    } else {
      // $(`.${project.class}`).slideUp("slow");
      $(`.${project.class}`).hide();
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

function addArticleListener(article) {
  $(".nav-links").removeClass("indicator");
  $(`#${article}`).addClass("indicator");

  $("article").hide();
  $(`#${article}-container`).show();
}
