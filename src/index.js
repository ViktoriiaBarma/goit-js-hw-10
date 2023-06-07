import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const select = document.querySelector('.breed-select');
const descr = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
select.addEventListener('change', getDescriptions);

fetchBreeds()
  .then(data => {
    //console.log(data)
    renderList(data);
    select.classList.remove('is-hidden');
  })
  .catch(error => Notify.failure(error.message))
  .finally(() => loader.classList.add('is-hidden'));

function renderList(data) {
  const markup = data
    .map(({ name, id }) => {
      return `<option value="${id}">${name}
</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}

function getDescriptions(e) {
  descr.innerHTML = '';
  loader.classList.remove('is-hidden');
  fetchCatByBreed(e.target.value)
    .then(data => {
      console.log(data);
      renderDescr(data);
    })
    .catch(error => Notify.failure(error.message))
    .finally(() => loader.classList.add('is-hidden'));
}

function renderDescr(data) {
  const imgUrl = data[0].url;
  const markup = data[0].breeds
    .map(({ name, description, temperament }) => {
      return `<img src='${imgUrl}' alt='${name}' width='400'><div class="descr"><h2>${name}</h2><p>${description}</p><p>${temperament}</p></div>`;
    })
    .join('');
  descr.insertAdjacentHTML('beforeend', markup);
}


