'use strict';

function appendProject(project) {
  let $feed = `<li>
    <span id="${project.id}" class="pointer">${project.name}</span>
    <div class="${project.class} hidden">${project.data}
    <a href="https://github.com/${project.endpoint}">Visit ${project.name}</a>
    </div>
    </li>`;

  return $feed;
}

function loadProjects() {
  $("#project-container").empty();

  projects.forEach(function(project) {
    // console.log(project);

    $("#project-container").append(appendProject(project));

    $(`#${project.id}`).on("click", function(e) {
      if ( $(`.${project.class}`).is(":hidden") ) {
        $(`.${project.class}`).slideDown("fast");
      } else {
        $(`.${project.class}`).slideUp("fast");
      }
    });
  });
}

$(document).ready(loadProjects);
