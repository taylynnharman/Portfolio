// webpage =

const url = "./data/projects.json";
const container = document.querySelector("#projects");

// retrieve data from json file
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.projects);
    displayProjects(data.projects); // Corrected function name
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  console.log("Image",project.images)

  // Create a thumbnail preview of project
  const image = document.createElement("img");
image.src = "./images/" + project.image;
  image.alt = project.name;
  image.loading = "lazy";
  image.width = 100;
  image.height = 200;

  // Create Project Title
  const title = document.createElement("h2");
  title.textContent = project.name;

  //Show Language Showcased
  const language = document.createElement("h3");
  language.textContent = project.showcase;

  // Create Project Date
  const date = document.createElement("h4");
  date.textContent = project.date;

  // Create Button to go to Project
  const button = document.createElement("a");
  button.textContent = "View";
  button.href = project.url;
  console.log("URL", button.href);
  button.target = "_blank";
  projectCard.appendChild(title);
  projectCard.appendChild(language);
  projectCard.appendChild(date);
  projectCard.appendChild(image);
  projectCard.appendChild(button);

  return projectCard;
}
function displayProjects(projectTypes) {
  console.log("Data", projectTypes);
  container.innerHTML = "";

  projectTypes.forEach((projectType) => {
    // Assuming projectType is an object with a 'project' property
    if (projectType.project) {
      projectType.project.forEach((project) => {
        const projectCard = createProjectCard(project);
        if (projectCard) {
          container.appendChild(projectCard);
        }
      });
    }
  });
}
