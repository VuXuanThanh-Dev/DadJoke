

const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

fetchJoke();

btn.addEventListener('click', fetchJoke);

async function fetchJoke() {
    const headers = { 
        method: "GET",
        headers : {
            "Accept": "application/json"
        }
        
    }


    const result = await fetch('https://icanhazdadjoke.com', headers);
    const  data = await result.json();
    joke.innerHTML = data.joke;

    // fetch('https://icanhazdadjoke.com', headers)
    // .then(res => {
    //     return res.json();
    // })
    // .then(res => {
    //     joke.innerHTML = res.joke;
    // });
}