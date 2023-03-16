let url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c18mtm405VaHSCO6kXTh/scores"


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
  

      
  const get = async () => {
    const res = await fetch(url);

    const data = await res.json();
    data.result.forEach(user => {

      const newname = `<li>${user.user}:${user.score}</li>`
      const list = document.querySelector("ul")
      list.innerHTML += newname

    });
  }
export {submit, get}