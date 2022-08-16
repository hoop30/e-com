
export function FormatPrice({price, className = ""}) {
    const splitPrice = price.split('.')
    
    return <p className={className}>{splitPrice[0]}€<sup>{splitPrice[1]}</sup></p>
}
