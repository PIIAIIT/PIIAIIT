// WORK EXPERIENCE
function createWorkExperienceEntry(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'work-entry';

    const title = document.createElement('h3');
    title.textContent = entry.position + ' at ' + entry.company;
    entryDiv.appendChild(title);

    const duration = document.createElement('p');
    duration.className = 'duration';
    duration.textContent = entry.startDate + ' - ' + (entry.endDate || 'Present');
    entryDiv.appendChild(duration);

    const description = document.createElement('p');
    description.textContent = entry.responsibilities;
    entryDiv.appendChild(description);

    return entryDiv;
}

function loadWorkExperience() {
    const workExperienceSection = document.getElementById('work-experience');

    fetch('data/work_experience.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
                const entryDiv = createWorkExperienceEntry(entry);
                workExperienceSection.appendChild(entryDiv);
            });
        })
        .catch(error => console.error('Error loading work experience:', error));
}

// EDUCATION
function createExperienceEntry(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'education-entry';

    const title = document.createElement('h3');
    title.textContent = entry.degree + ' at ' + entry.institution;
    entryDiv.appendChild(title);

    const location = document.createElement('p');
    location.className = 'location';
    location.textContent = entry.location;
    entryDiv.appendChild(location);

    const duration = document.createElement('p');
    duration.className = 'duration';
    duration.textContent = entry.startDate + ' - ' + (entry.endDate || 'Present');
    entryDiv.appendChild(duration);

    const description = document.createElement('p');
    description.textContent = entry.details;
    entryDiv.appendChild(description);
  
    return entryDiv;
}

function loadEducation() {
    const educationSection = document.getElementById('education');

    fetch('data/education.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
                const entryDiv = createExperienceEntry(entry);
                educationSection.appendChild(entryDiv);
            });
        })
        .catch(error => console.error('Error loading education:', error));
}

function createProgSkillEntry(skill) {
    const progressBar = document.createElement('div');
    progressBar.className = 'skill-bar';

    const progress = document.createElement('div');
    progress.className = skill.language.toLowerCase() + " " + 'skill-level';
    progress.style.width = skill.proficiency_level + '%';

    progressBar.appendChild(progress);

    return progressBar;
}

function loadProgSkills() {
  const prog = document.getElementById("programming-languages");
  fetch('data/proglang.json')
  .then(res => res.json())
  .then(data => {
      data.forEach(skill => {
        const skillName = document.createElement('p');
        skillName.innerHTML = `${skill.language}`;
        const skillEntry = createProgSkillEntry(skill);

        prog.appendChild(skillName);
        prog.appendChild(skillEntry);
        console.log(`Language: ${skill.language}, Proficiency: ${skill.proficiency_level}`);
      });
   })
  .catch(err => console.error('Error loading programming skills:', err));
}

function loadLangSkills() {
  const prog = document.getElementById("languages");
  fetch('data/languages.json')
  .then(res => res.json())
  .then(data => {
      data.forEach(skill => {
        const skillName = document.createElement('p');
        skillName.innerHTML = `${skill.language}`;

        const skillLevel = document.createElement('p');
        skillLevel.innerHTML = `${skill.level}`;

        prog.appendChild(skillName);
        prog.appendChild(skillLevel);
        console.log(`Language: ${skill.language}, Proficiency: ${skill.level}`);
      });
   })
  .catch(err => console.error('Error loading programming skills:', err));
}
// Load data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadWorkExperience();
  loadEducation();
  loadProgSkills();
  loadLangSkills();
});

