const url = 'https://api.thecatapi.com/v1';
const key =
  'live_AmLs0t9ZUn3fXhJpj34LAVcwSlAeEVCPRziGpYlZrN4BZer9s4uXqaGXDmurm7vW';
axios.defaults.headers.common['x-api-key'] = key;

import axios from 'axios';

export async function fetchBreeds() {
  const response = await axios.get(`${url}/breeds`);
  return response.data;
}

export async function fetchCatByBreed(breedId) {
  const response = await axios.get(`${url}/images/search?breed_ids=${breedId}`);
  return response.data;
}
