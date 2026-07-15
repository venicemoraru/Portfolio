const preview = document.getElementById("preview");

const projects = document.querySelectorAll(".projectlist");

projects.forEach(project => {

  project.addEventListener("mouseenter", () => {

    const image = project.getAttribute("data-image");

    preview.src = image;

    preview.style.opacity = "1";
  });

  project.addEventListener("mouseleave", () => {

    preview.style.opacity = "0";
  });

  project.addEventListener("mousemove", (event) => {

    preview.style.left = event.clientX + 20 + "px";

    preview.style.top = event.clientY + 20 + "px";
  });

});