
export function FormatPrice({price, className = ""}) {
    
    const priceToSplit = price.toString()
    const splitPrice = priceToSplit.split('.')
    
    if (splitPrice[1] === undefined) {
        splitPrice.push('00')
    } else if (splitPrice[1].length === 1) {
        splitPrice[1] = splitPrice[1] + '0'
    }
    
    return <p className={className}  data-testid="test">{splitPrice[0]}€<sup>{splitPrice[1]}</sup></p>
}
