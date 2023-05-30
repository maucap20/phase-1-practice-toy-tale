let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


fetch ("http://localhost:3000/toys") 
  .then ((resp) => resp.json())
  .then ((toys) => toys.forEach((toy) => renderToy(toy))) 

const toyCollection = document.querySelector("#toy-collection")

function renderToy(toy) {
  const toyCard = document.createElement("div")
  toyCard.className = "card"

  const h2 = document.createElement("h2")
  h2.textContent = toy.name

  const img = document.createElement("img")
  img.src = toy.image
  img.className = "toy-avatar"

  const p = document.createElement("p")
  p.textContent = `${toy.likes} likes`

  const button = document.createElement("button")
  button.className = "like-btn"
  button.id = toy.id
  button.textContent = "Like ❤️"
  
  toyCard.append(h2)
  toyCard.append(img)
  toyCard.append(p)
  toyCard.append(button)

  toyCollection.appendChild(toyCard)

  button.addEventListener("click", increaseLikes)
  function increaseLikes() {
    toy.likes++
    p.textContent = `${toy.likes} likes`
  }
}

const toyForm = document.querySelector(".add-toy-form")

function addToyCard(e) {
  e.preventDefault()

  const newToyName = e.target.name.value
  const newToyImage = e.target.image.value

  const newToy = {
    "id": 9,
    "name": newToyName,
    "image": newToyImage,
    "likes": 0
  }

  renderToy(newToy)
}

toyForm.addEventListener("submit", addToyCard)



