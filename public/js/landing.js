// Basic interactions for the landing page scaffold.

// Tab switching: show the panel that matches the clicked tab.
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll("[data-panel]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.tab;
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== target;
    });
  });
});

// Comments panel: hidden until a row is clicked.
const layout = document.getElementById("layout");
const comments = document.getElementById("comments");
const commentsFor = document.getElementById("comments-for");

document.querySelectorAll(".paper-card").forEach((card) => {
  card.addEventListener("click", () => {
    document
      .querySelectorAll(".paper-card")
      .forEach((c) => c.classList.remove("is-selected"));
    card.classList.add("is-selected");

    const title = card.querySelector(".paper-title").textContent;
    commentsFor.textContent = title;

    comments.hidden = false;
    layout.classList.add("comments-open");
  });
});
