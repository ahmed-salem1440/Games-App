// <============== Import used modules ==============>
import {Home} from './home.js'

// <============== creat new instans from modules ==============>
let homeGames = new Home()
let getGames = homeGames.localGetGames

// <============== Events ==============>
document.querySelectorAll('.nav-menu a').forEach(function(link){
    link.addEventListener('click',function(){
        document.querySelector('.active').classList.remove('active')
        link.classList.add('active')
        let category = link.getAttribute('data-category')
        getGames(category)
    })
})

// <============== call getGames function =================>
getGames()

// <============== add Evet to close icon =================>
const DClose = document.getElementById("DClose")
DClose.addEventListener("click",function(){
    detailsPage.classList.add("d-none")
})