import './style.css';

let url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c18mtm405VaHSCO6kXTh/scores"

// let submit = (user, score) => fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     "user": user,
//     "score": score
//   })
// })

//  .then(res => {
//     return res.json()})
//   .then(data => console.log(data))

const submit = async (user, score) => { 
  let response = await fetch( url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user,score
  })
})

 
  let data = await response.json()
  console.log(data)
  return data
}

let submitForm = document.querySelector(".submit")

submitForm.addEventListener("submit", (e) => {
  let scoreVal = document.querySelector(".score").value
  let nameVal = document.querySelector(".name").value
  submit(nameVal, scoreVal)
  console.log("worked")
  e.preventDefault()
})





// submitBut.addEventListener("click", submit(nameVal, scoreVal))
// submit("asdf", 232)


    // fetch(url)
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {

    //   console.log(data)
      
     
    // })
    
  const get = async () => {
    const res = await fetch(url);

    const data = await res.json();
    data.result.forEach(user => {

      const newname = `<li>${user.user}:${user.score}</li>`
      const list = document.querySelector("ul")
      list.innerHTML += newname

    });
  }

  get()