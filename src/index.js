import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/styles';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  select: document.querySelector('.breed-select'),
  div: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

const newSelect = new SlimSelect({
  select: refs.select,
  settings: {
    placeholderText: 'Search cat',
  },
});

const error = {
  title: 'Error',
  message: 'Oops! Something went wrong! Try reloading the page!',
  position: 'topRight',
};

function changeVisible(element) {
  element.classList.toggle('hidden');
}
async function handlerGetBreeds(e) {
  changeVisible(refs.loader);
  changeVisible(refs.div);
  newSelect.disable();
  try {
    const catInfo = await fetchCatByBreed(e.target.value);
    createMarkup(catInfo);
  } catch (err) {
    iziToast.error(error);
  } finally {
    changeVisible(refs.loader);
    changeVisible(refs.div);
    newSelect.enable();
  }
}

function fillingSelect(breeds) {
  const options = breeds.map(({ id, name }) => {
    const option = document.createElement('option');
    option.value = id;
    option.text = name;
    return option;
  });

  newSelect.setData([{ placeholder: true, text: '' }, ...options]);
}

function createMarkup(cat) {
  const { url, breeds } = cat[0];
  const markup = breeds
    .map(({ name, description, temperament }) => {
      return `
    <img class='imgCat' src=${url} alt=${name} width='600'>
    <div class ='wrap-content'>
      <h2 class='title'>${name}</h2>
      <p class='text'>${description}</p>
      <p class='text'>
        <b>Temperament:</b>
        ${temperament}
      </p>
    </div>
    `;
    })
    .join();

  refs.div.innerHTML = markup;
}

async function startInit() {
  newSelect.disable();
  try {
    const allBreeds = await fetchBreeds();

    fillingSelect(allBreeds);

    refs.select.addEventListener('change', handlerGetBreeds);
  } catch (err) {
    iziToast.error(error);
  } finally {
    changeVisible(refs.loader);
    changeVisible(refs.select);
    newSelect.enable();
  }
}

startInit();
