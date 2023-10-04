class CountryItem{
    constructor(country){
        this.country = country;
    }

    render(root){
        //parent Div
        let parentDiv = document.createElement('div')
        parentDiv.className = "col-sm-3 mt-4"

        //card div
        let card = document.createElement('div')
        card.className = "card"

        //image
        let img = document.createElement('img')
        img.src = this.country.flags.svg
        img.className = "card-img-top"

        //cardbody
        let cardBody = document.createElement('div')
        cardBody.className = "card-body"

        //h5
        let h5 = document.createElement('div')
        h5.className = "card-title"
        h5.innerText = this.country.name.common

        //h5 to cardbody
        cardBody.append(h5)
    

        //append card to parentdiv
        card.append(img)

        //append cardbody to card div
        card.append(cardBody)

        //append card to parentdiv
        parentDiv.append(card)

        return parentDiv

    }
}

export default CountryItem;