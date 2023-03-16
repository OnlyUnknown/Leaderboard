import './style.css';
import { submit, get } from './modules/getAndAdd.js';

const submitForm = document.querySelector('.submit');

submitForm.addEventListener('submit', (e) => {
  let scoreVal = document.querySelector('.score').value;
  let nameVal = document.querySelector('.name').value;
  submit(nameVal, scoreVal);
  nameVal = '';
  scoreVal = '';
  e.preventDefault();
});

const refresh = document.querySelector('.re-button');

refresh.addEventListener('click', get);

get();
