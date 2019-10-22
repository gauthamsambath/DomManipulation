// api key aef72f7ca09ac22cfcc1b637456be82d
// secret 124781a11a26224c13f5c6cb608cea78
//user gauthamsambath

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

const app = document.getElementById('app');

fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=aef72f7ca09ac22cfcc1b637456be82d&format=json')
.then(data => {
    data.json().then(music => {
        
        console.log("this is the data block")
        music.tracks.track.map(e => {
            const card = document.createElement('div');
            const img = document.createElement('img');
            const cardBody = document.createElement('div');
            const title = document.createElement('h5');
            const text = document.createElement('p');
            const button = document.createElement('button');
            
            title.innerHTML = e.name;
            text.innerHTML = e.artist.name;
            img.src = e.image[2]["#text"];
            button.innerHTML = "Go to Hell !!";

            card.className = "card";
            cardBody.className = "card-body";
            img.className = "card-img-top";
            title.className = "card-title";
            text.className = "card-text";
            button.className = "btn btn-warning"

            cardBody.appendChild(title);
            cardBody.appendChild(text);
            cardBody.appendChild(button)
            card.appendChild(img);
            card.appendChild(cardBody);
            
            app.appendChild(card)

        })
    })
})

console.log("i am at the last ")