"use strict";
const filters = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll("[data-languages]")];
const count = document.getElementById("project-count");
filters.forEach(button => button.addEventListener("click", () => {
  const language = button.dataset.filter;
  filters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  let visible = 0;
  projects.forEach(project => {
    project.hidden = language !== "all" && !project.dataset.languages.split(" ").includes(language);
    if (!project.hidden) visible++;
  });
  count.textContent = `${visible} project${visible === 1 ? "" : "s"}`;
}));
document.body.classList.remove("no-js");
