// WORK EXPERIENCE
function createWorkExperienceEntry(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'work-entry';

    const title = document.createElement('h3');
    title.textContent = entry.position + ' bei ' + entry.company;

    const duration = document.createElement('p');
    duration.className = 'duration';
    duration.textContent = entry.startDate + ' - ' + (entry.endDate || 'Present');

    const description = document.createElement('p');
    description.className = 'responsibilities';
    description.textContent = entry.responsibilities;

    entryDiv.appendChild(duration);
    entryDiv.appendChild(title);
    entryDiv.appendChild(description);

    return entryDiv;
}

async function loadWorkExperience() {
    const workExperienceSection = document.getElementById('work-experience');

   try {
    const res = await fetch('data/work_experience.json');
    const data = await res.json();

    const entries = data.map(entry => createWorkExperienceEntry(entry));
    workExperienceSection.append(...entries);
  }
  catch (err) {
    console.error('Error loading work experience:', err);
  }
}

// EDUCATION
function createEducationEntry(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'education-entry';

    const title = document.createElement('h3');
    title.textContent = entry.degree + ' bei ' + entry.institution;

    const location = document.createElement('p');
    location.className = 'location';
    location.textContent = entry.location;

    const duration = document.createElement('p');
    duration.className = 'duration';
    duration.textContent = entry.startDate + ' - ' + (entry.endDate || 'Present');

    const description = document.createElement('ul');
    description.className = 'details';

    const entries = entry.details.map(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        return li;
    });
    description.append(...entries);

    entryDiv.appendChild(duration);
    entryDiv.appendChild(title);
    entryDiv.appendChild(location);
    entryDiv.appendChild(description);
  
    return entryDiv;
}

async function loadEducation() {
    const educationSection = document.getElementById('education');

  try {
    const response = await fetch('data/education.json');
    const data = await response.json();

    const entries = data.map(entry => createEducationEntry(entry));
    educationSection.append(...entries);
  }
  catch (err) {
    console.error('Error loading education:', err);
  }
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

async function loadProgSkills() {
  const prog = document.getElementById("programming-languages");
  try {
    const response = await fetch('data/proglang.json');
    const data = await response.json();

    data.forEach(skill => {
      const skillName = document.createElement('p');
      skillName.innerHTML = `${skill.language}`;
      const skillEntry = createProgSkillEntry(skill);

      prog.appendChild(skillName);
      prog.appendChild(skillEntry);
      console.log(`Language: ${skill.language}, Proficiency: ${skill.proficiency_level}`);
    });
  }
  catch (err) {
    console.error('Error loading programming skills:', err);
  }
}

async function loadLangSkills() {
  const prog = document.getElementById("languages");

  try {
    const res = await fetch('data/languages.json');
    const data = await res.json();

    data.forEach(skill => {
      const skillName = document.createElement('p');
      skillName.innerHTML = `${skill.language}`;

      const skillLevel = document.createElement('p');
      skillLevel.innerHTML = `${skill.level}`;

      prog.appendChild(skillName);
      prog.appendChild(skillLevel);
      console.log(`Language: ${skill.language}, Proficiency: ${skill.level}`);
    });
  }
  catch (err) {
    console.error('Error loading language skills:', err);
  }
}
// Load data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
  loadWorkExperience(),
  loadEducation(),
  loadProgSkills(),
  loadLangSkills(),
  ]);
});

