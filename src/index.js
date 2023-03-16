import './style.css';
import { submit, get } from './modules/getAndAdd';

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


let submitForm = document.querySelector(".submit")

submitForm.addEventListener("submit", (e) => {
  let scoreVal = document.querySelector(".score").value
  let nameVal = document.querySelector(".name").value
  submit(nameVal, scoreVal)
  console.log("worked")
  e.preventDefault()
})

let refresh = document.querySelector(".re-button")

refresh.addEventListener("click", get)

get()


// submitBut.addEventListener("click", submit(nameVal, scoreVal))
// submit("asdf", 232)


    // fetch(url)
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {

    //   console.log(data)
      
     
    // })

