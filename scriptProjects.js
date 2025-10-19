// Events
document.addEventListener("DOMContentLoaded", function() {
  loadProjects();
});

// Create project entry
function createProjectEntry(project) {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project';
  projectDiv.onclick = () => window.open(project.repository, "_blank");

  const img = document.createElement('img');
  img.src = project.background_image;
  img.alt = project.background_image_alt;

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  const title = document.createElement('h3');
  title.textContent = project.title;
  const description = document.createElement('p');
  description.textContent = project.description_short;
  projectInfo.appendChild(title);
  projectInfo.appendChild(description);

  projectDiv.appendChild(img);
  projectDiv.appendChild(projectInfo);

  return projectDiv;
}

function loadProjects() {
    const projectsContainer = document.getElementById("projects");
    fetch('data/projects.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(project => {
            const projectEntry = createProjectEntry(project);
            projectsContainer.appendChild(projectEntry);
        });
    })
    .catch(error => console.error('Error loading projects:', error));
}
