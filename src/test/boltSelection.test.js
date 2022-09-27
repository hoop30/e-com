import { BoltSelection } from '../utils/BoltSelection'

test('tableText length', function() {
    const texts = [
        "test",
        "I",
        "this is made to test the correct length"
    ]
    const research = "test"
    
    texts.forEach(text => {
        const test = BoltSelection(text, research)
        expect(test.length).toBe(text.length)
    })
})

test('tableText is []', function() {

    const test = BoltSelection('test', 'test')
    expect(Array.isArray(test)).toBeTruthy()
    
})