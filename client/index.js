document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

// Put request to add another compliment to the array of compliments located on the server.
const addCompliment = () => {
    let newComp = document.querySelector("input").value;
    const newObj = {compliment: newComp}
    axios.put("http://localhost:4000/api/addCompliment/", newObj)
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

const form = document.querySelector("form");
form.addEventListener("submit", addCompliment);

const dadJoke = () => {
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
          'x-rapidapi-key': 'a93f2a4050msh39bf5b784c4038ap123194jsncdabf345cd58'
        }
    };
      
    const punchContainer = document.getElementById("punch-container");
    punchContainer.innerHTML = "";

    // Axios request to Dad Jokes API to get random "dad joke" which is a misnomer because I would never tell a lot of these jokes to my kids nor I think would most dads. 
    axios.request(options)
        .then(function (res) {
            const {setup} = res.data.body[0];
            const {punchline} = res.data.body[0];
            const setup2 = document.getElementById("setup-container");
            const punchline2 = document.createElement("p");
            punchline2.innerHTML = punchline;

            setup2.innerHTML = "";
            setup2.innerHTML = setup;

            const printPunch = () => {
                punchContainer.appendChild(punchline2);

                const next = document.createElement("button");
                next.innerHTML = "Try again";
                punchContainer.appendChild(next);
                next.addEventListener("click", dadJoke);    
            }

            const getPunch = document.createElement("button");
            getPunch.innerHTML = "Get punch line";
            punchContainer.appendChild(getPunch);
            getPunch.addEventListener("click", printPunch);
        
        })
        .catch(function (error) {
            console.error(error);
        });
};

const joke = document.getElementById("getJoke");
getJoke.addEventListener("click", dadJoke);