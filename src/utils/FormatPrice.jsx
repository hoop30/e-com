
export function FormatPrice(price) {

    const splitPrice = price.split('.')
    
    const newPrice = [
        splitPrice[0] ,
        "€",
        <sup>{splitPrice[1]}</sup>
    ]

    return newPrice
}
