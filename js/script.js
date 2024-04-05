function calculateAverage (x, y, z) {
    const average = (x+y+z)/3
    return average
}


const result = calculateAverage (9,5, 8);
console.log(result)







function calculatePrice (discount, price) {
    const finalPrice= price - (price * discount/100)
    return finalPrice
}

const discountPrice = calculatePrice (50, 50);
console.log (discountPrice)


function wordFormation (wordA, wordB) {
    const formation = wordA + '-' + wordB 
    return formation
}

const finalWord = wordFormation ('Hola', 'Caracola')
console.log (finalWord)


function calculateMeters (km) {
    const m = (km/1000)
    return m
}

const meters = calculateMeters (1000);
console.log (meters)