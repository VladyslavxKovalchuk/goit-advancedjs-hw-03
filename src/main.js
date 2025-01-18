import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { getPhotos } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.image-search-form');

let query;

const simpleLightBox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('input', e => {
  query = e.target.value.trim();
});

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!query) return;

  gallery.innerHTML = '';
  loader.style.display = 'block';

  getPhotos(query)
    .then(({ hits }) => {
      loader.style.display = 'none';
      if (hits.length) {
        gallery.innerHTML = createGallery(hits);
        simpleLightBox.refresh();
      } else {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'There are some errors with loading pictures.',
        position: 'topRight',
      });
      console.error(error);
    })
    .finally(() => {
      query = '';
      searchForm.reset();
    });
});
