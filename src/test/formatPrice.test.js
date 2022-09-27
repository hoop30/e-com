import { FormatPrice } from '../utils/FormatPrice';
import { render, screen } from '@testing-library/react';

test('FormatPrice.classname === classname', function() {

    const someClass = [
        "test",
        undefined,
        "classname test"
    ]

    someClass.forEach(myclass => {
        render(<FormatPrice price="10" className={myclass}/>)
        const test = screen.getByTestId('test')
        
        if (myclass === undefined) {
            expect(test.className).toBe("")
        } else {
            expect(test.className).toBe(myclass)
        }

        test.parentNode.remove(test)
    })
})