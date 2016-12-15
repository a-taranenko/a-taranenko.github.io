'use strict';

// Function that builds HTML for each project
function appendProject(project) {
  let $feed = `<p>
    <span id="${project.id}" class="project-name pointer">${project.name} - ${project.techs}</span>
    <div class="${project.class} hidden project-data">${project.data}
    <a href="https://github.com/${project.endpoint}" class="pointer">Visit ${project.name}</a>
    </div>
    </p>`;

  return $feed;
}

// Function that attaches event listeners to all projects
function addProjectListener(project) {
  // On click will slide up or down project description box
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