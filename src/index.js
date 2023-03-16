import './style.css';
import { submit, get } from './modules/getAndAdd.js';

const submitForm = document.querySelector('.submit');

submitForm.addEventListener('submit', (e) => {
  let scoreVal = document.querySelector('.score');
  let nameVal = document.querySelector('.name');
  submit(nameVal.value, scoreVal.value);
  nameVal.value = '';
  scoreVal.value = '';
  e.preventDefault();
});

const refresh = document.querySelector('.re-button');

refresh.addEventListener('click', get);

get();
