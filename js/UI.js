import {Details} from './details.js'
let details = new Details()
let getDetails = details.getDetails
export class UI{
    dGames(gamesData){
        let gamesCards = ``
        for(let i = 0 ; i<gamesData.length; i++){
            gamesCards += `
            <div id ="${gamesData[i].id}" class="col gameCard">
            <div class="card h-100 bg-transparent">
              <div class="card-body">
                <figure class="position-relative">
                  <img src="${gamesData[i].thumbnail}" class="card-img-top object-fit-cover w-100" alt="">
                </figure>
                <figcaption>
                    <div class="hstack justify-content-between">
                        <h3 class="h6 text-white small">${gamesData[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                <p class="card-text small text-white text-center opacity-50">
                    ${gamesData[i].short_description}
                </p>
              </figcaption>
              </div>
              <footer class="cards-footer small hstack justify-content-between" >
              <span class="badge badge-color">${gamesData[i].genre}</span>
              <span class="badge badge-color" >${gamesData[i].platform}</span>
            </footer>
            </div>
          </div>`
        }
        document.getElementById("gameData").innerHTML = gamesCards ;
        let cards = document.querySelectorAll(".gameCard")
        cards=Array.from(cards)
        console.log(cards)
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click" , function(){
                getDetails(cards[i].id)
                console.log(cards[i].id)
            })
        }
    }
}