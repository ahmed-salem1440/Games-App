export class Details{
    async getDetails(gameId){
        let detailURL = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '23118f1739msha545bd8ecb8c2c7p1edf81jsndd8cc3c8575b',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(detailURL,options)
        let DResponse = await api.json()
        console.log(DResponse);
        const DTitle = document.getElementById("DTitle")
        const DCategory = document.getElementById("DCategory")
        const DPlatForm = document.getElementById("DPlatForm")
        const DStatus = document.getElementById("DStatus")
        const DParagraph = document.getElementById("DParagraph")
        const detailsImg = document.getElementById("detailsImg")
        const DBtn = document.getElementById("DBtn")
        const detailsPage = document.getElementById("detailsPage")
        DTitle.innerHTML = `Title: ${DResponse.title}`
        DCategory.innerHTML = `${DResponse.genre}`
        DPlatForm.innerHTML = `${DResponse.platform}`
        DStatus.innerHTML = `${DResponse.status}`
        DParagraph.innerHTML = `${DResponse.description}`
        DBtn.setAttribute("href" , DResponse.game_url) 
        detailsImg.setAttribute("src" ,DResponse.thumbnail )
        detailsPage.classList.remove("d-none")
    }
}
