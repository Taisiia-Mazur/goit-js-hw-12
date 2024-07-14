import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function fetchParams({ q = '', page = 1, per_page = 15 }) {
  const API_KEY = '44767976-5c84653ee99974363117d019c';
  const OPTIONS = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
  });

  return (await axios.get(`?${OPTIONS.toString()}`)).data;
}
