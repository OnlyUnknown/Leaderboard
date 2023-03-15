import './style.css';

let url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c18mtm405VaHSCO6kXTh/scores"

let submit = (name, score) => fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    "user": name,
    "score": score
  })
})

 .then(res => {
    return res.json()})
  .then(data => console.log(data))


// let submitBut = document.querySelector(".submit-but")

// let nameVal = document.querySelector(".name").value
// let scoreVal = document.querySelector(".score").value


// submitBut.addEventListener("click", submit(nameVal, scoreVal))
// submit("asdf", 232)


    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      let i = 0;
      data.result.forEach(user => {

        const newname = `<li>${data.result[i].user}:${data.result[i].score}</li>`
        const list = document.querySelector("ul")
        list.innerHTML += newname
        i++
      });
    })
    