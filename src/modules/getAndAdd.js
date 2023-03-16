const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FzDHyBPZ9YK2Z6BW2gdj/scores';

const submit = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user, score,
    }),
  });

  const data = await response.json();
  return data;
};

const get = async () => {
  const res = await fetch(url);
  let output = '';
  const data = await res.json();
  data.result.forEach((user) => {
    const newname = `<li>${user.user}:${user.score}</li>`;

    output += newname;
  });
  const list = document.querySelector('ul');
  list.innerHTML = output;
};
export { submit, get };