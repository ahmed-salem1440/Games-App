import {UI} from './UI.js'
let UIobject = new UI
let displayGames = UIobject.dGames
export class Home{
    async localGetGames(catName = "mmorpg"){
        const loading = document.querySelector('.loading-parent')
        loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '23118f1739msha545bd8ecb8c2c7p1edf81jsndd8cc3c8575b',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catName}` , options)
        let games = await api.json()
        displayGames(games)
        loading.classList.add('d-none')
    }
    
}