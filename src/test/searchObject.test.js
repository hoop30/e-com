import { SearchObjetct } from "../utils/SearchObjetct";

test('SearchObject return an array not empty',  function() {

    const test = SearchObjetct()
    //await expect(Object.keys(test).length).toBe('test')
    setTimeout(() => {

    },500)
    expect(Object.keys(test).length).toBe('test')
})