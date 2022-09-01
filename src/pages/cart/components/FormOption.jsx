import React from 'react'

export function FormOption({quantity}) {
    let option = []
    let optionNumber = 5
    quantity < 5 ?  optionNumber = 5 : optionNumber = quantity

    for (let i = 0; i <= optionNumber; i++) {
        if (quantity === i) {
            const newOption = <option value={i} selected>{i}</option>

            option.push(newOption)
        } else {
            const newOption = <option value={i}>{i}</option>

            option.push(newOption)
        }
    }

    return option
}
