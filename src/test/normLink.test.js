import { NormLink } from '../utils/NormLink'

test('Nomalise link to product page', function() {

    const test = NormLink('Product', 'location-test')
    expect(test.substring(9, 16)).toBe('product')
})

test('Nomalise link to category page', function() {

    const test = NormLink('Category', 'location-test')
    expect(test.substring(10, 18)).toBe('category')
})

test('Nomalise link to location', function() {

    const locations = [
        "product",
        "",
        "my product"
    ]
    
    locations.forEach(location => {
        const test = NormLink('Category', location)
        expect(test.substring(19)).toBe(location)
    });
})