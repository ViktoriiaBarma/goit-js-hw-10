const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const BASE_URL_BREED = " https://api.thecatapi.com/v1/images/search"
const API = "live_yvRNh0JjOhImQR1oIieLkw9wCXaQXa4kjWnFncoszJF8sTZLE8utlexuelegmmU8";

function fetchBreeds() {
  return fetch(`${BASE_URL}?api_key=${API}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}
export { fetchBreeds }

export function fetchCatByBreed(breedId){
  return fetch(`${BASE_URL_BREED}?api_key=${API}&breed_ids=${breedId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

