
export function NormLink(page, location) {
    const normCat = location.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
    if (page === 'Product') {
        return `/${page}?product=${normCat}`
    } else {
        return `/${page}?category=${normCat}`
    }
}