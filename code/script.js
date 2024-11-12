// A function that adds and remove the class "active" on the section you click on.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const accordion = document.querySelector(".accordion");

    //async function getPost(){
    //const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    //const data = await response.json()};

    posts.forEach((post) => {
      const section = document.createElement("div");
      section.classList.add("section");

      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = post.title;

      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = post.body;

      section.appendChild(title);
      section.appendChild(description);
      accordion.appendChild(section);

      title.addEventListener("click", toggle);
      //title.classList.toggle("active");
    });
  });

function toggle(e) {
  const titleElement = e.target;
  const descriptionElement = titleElement.nextElementSibling;

  descriptionElement.classList.toggle("active");
}

const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");
section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);
