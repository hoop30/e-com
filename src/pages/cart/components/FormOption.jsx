import React from 'react'

export function FormOption({quantity}) {
    let option = []
    for (let i = 0; i < 5; i++) {
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
