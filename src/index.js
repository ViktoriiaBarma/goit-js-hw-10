import { fetchBreeds } from "./cat-api.js";
import { fetchCatByBreed } from "./cat-api.js";

const select = document.querySelector(".breed-select")
const descr = document.querySelector(".cat-info")


function getLists(query) {
  fetchBreeds(query).then((data) => {
    //console.log(data)
    renderList(data)
  });
}
getLists()

function renderList(data) {
  const markup = data.map(({ name }) => {
      return `<option value="${name}">${name}
</option>`;
    })
    .join("");
  select.insertAdjacentHTML("beforeend", markup);
}

function getDescriptions(query) {
  fetchCatByBreed(query).then((data) =>
    console.log(data),
   // renderDescr(data)
  )
}

getDescriptions()

function renderDescr(data) {
  const markup = data.map(({ name, description, temperament }) => {
      return `<h2>${name}</h2><p>${description}</p><p>${temperament}</p>`;
    })
    .join("");
  descr.insertAdjacentHTML("beforeend", markup);
}
