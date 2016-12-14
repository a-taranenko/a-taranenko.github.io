'use strict';

function appendProject(project) {
  let $feed = `<li>
    <span id="${project.id}" class="pointer">${project.name}</span>
    <div class="${project.class} hidden project-data">${project.data}
    <a href="https://github.com/${project.endpoint}" class="pointer">Visit ${project.name}</a>
    </div>
    </li>`;

  return $feed;
}

function addProjectListener(project) {
  $(`#${project.id}`).on("click", function(e) {
    if ( $(`.${project.class}`).is(":hidden") ) {
      $(`.${project.class}`).slideDown("fast");

      projects.forEach(function(projectInner) {
        if (projectInner.endpoint !== project.endpoint && $(`.${projectInner.class}`).is(":visible")) {
          $(`.${projectInner.class}`).slideUp("fast");
        }
      });
    } else {
      $(`.${project.class}`).slideUp("fast");
    }
  });
}

function loadProjects() {
  $("#project-list-container").empty();

  projects.forEach(function(project) {
    $("#project-list-container").append(appendProject(project));

    addProjectListener(project);
  });
}

$(document).ready(function() {
  $("#home-container").slideDown("slow");

  $("#home").on("click", function(e) {
    $("article").hide();
    $("#home-container").show();
  });

  $("#about-me").on("click", function(e) {
    $("article").hide();
    $("#about-container").show();
  });

  $("#my-projects").on("click", function(e) {
    $("article").hide();
    $("#project-container").show();

    loadProjects();
  });

  $("#contact").on("click", function(e) {
    $("article").hide();
    $("#contact-container").show();
  });
});
