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

async function loadProjects() {
    const projectsContainer = document.getElementById("projects");

  try {
    const res = await fetch('data/projects.json');
    const data = await res.json();

    const entries = data.map(project => createProjectEntry(project));
    projectsContainer.append(...entries);
  }
  catch (err) {
    console.error('Error loading projects:', err);
  }
}

// Events
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadProjects(),
  ]);
});
