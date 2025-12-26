let inputEl = document.getElementById("input-el")
let btn = document.getElementById("btn")
let cards = document.querySelectorAll(".conversion-card p")

btn.addEventListener('click', function(){
    const value = parseFloat(inputEl.value);
    if(isNaN(value)){
        return alert("Please enter a number!")
    } else{
        cards.forEach((p)=>{
            const cardType = p.parentElement.dataset.type;

            if(cardType === "length"){
                const metersToFeet = (value * 3.28084).toFixed(3)
                const feetToMeters = (value /3.28084).toFixed(3)
                p.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters `
            }

            if(cardType === "volume"){
                const literToGallon = (value * 0.264172).toFixed(3)
                const gallonToLiter = (value / 0.264172).toFixed(3)
                p.textContent = `${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLiter} liters `
            }
            if(cardType === "mass"){
                const kilogramToPound = (value * 2.20462).toFixed(3)
                const poundToKilogram = (value / 2.20462).toFixed(3)
                p.textContent = `${value} kilos = ${kilogramToPound} pounds | ${value} pounds = ${poundToKilogram} kilos `
            }

        })
}
})