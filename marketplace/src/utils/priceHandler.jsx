
function getPrice(album) {
    let calc = 50 + album.name.length
    return calc;
}

function totalPrice(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {

        if (data[i].quantity > 1) {
            let qtt = (data[i].price * data[i].quantity)
            total += qtt
        }

        total += data[i].price
    }

    return total;
}

export const priceHandlers = {
    getPrice, totalPrice
}
