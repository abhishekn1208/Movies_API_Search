let URL = `https://www.omdbapi.com/?i=tt3896198&apikey=1a1f7117`;
let main = document.getElementById("box")
let button = document.getElementById("Search")

button.addEventListener("click",function(){
    getdata();
    
});

async function getdata(){
    let input = document.getElementById("input1").value;
    try {
        let res = await fetch(`${URL}&s=${input}`);
        let data = await res.json();
        displayData(data.Search)
    } catch (error) {
        console.log("error")
    }
}

function displayData(movie){
    main.innerHTML = "";

    movie.forEach(movie => {
        let card = document.createElement("div");
        card.classList.add("users-details")
        card.innerHTML = `
        <img src ="${movie.Poster}" alt ="${movie.Title}" />;
        <h3>${movie.Title}</h3>
        <h3>${movie.Year}</h3>

        `
        main.appendChild(card)
    });
}