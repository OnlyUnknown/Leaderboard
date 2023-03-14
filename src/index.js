import './style.css';

function components() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = '';

  return element;
}

document.body.appendChild(components());