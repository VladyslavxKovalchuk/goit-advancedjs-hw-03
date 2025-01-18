const API_KEY = '48306613-fd23d021c55686c3494b56897';
const BASE_URL = 'https://pixabay.com/api';

export function getPhotos(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
