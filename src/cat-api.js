const choiceBreed = document.querySelector(".breed-select")
const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const BASE_URL_BREED = " https://api.thecatapi.com/v1/images/search"
const API = "live_yvRNh0JjOhImQR1oIieLkw9wCXaQXa4kjWnFncoszJF8sTZLE8utlexuelegmmU8";

function fetchBreeds() {
  return fetch(`${BASE_URL}`)
    .then((response) => {
       console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}
export { fetchBreeds }

function fetchCatByBreed(breedId){
     const params = new URLSearchParams({
//     api_key: API,
    breed_ids: breedId,
//     //page,
//     //limit: 3,
  });
  return fetch(`${BASE_URL_BREED}?${params}`)
    .then((response) => {
       console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}
export { fetchCatByBreed }
