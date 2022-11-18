const btn = document.querySelector('#btn-joke');
const JokeText = document.querySelector('.joke-text');

function generateRandomJoke(){

  fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const myJoke = data.joke;
        JokeText.innerHTML=`
        <h3>${myJoke}</h3>
      `;
    })

}

 
//Event Listener
btn.addEventListener('click', generateRandomJoke);