

export function BoltSelection(text, research) {
    
    const tableText = text.split('')
    const researchSplit = research.split('')

    for (const aKey in tableText) {
        console.log(typeof tableText[aKey]);
        
        for (const bKey in researchSplit) {
                
            if (typeof tableText[aKey] === "string" && typeof researchSplit[bKey] === "string") {
            
                if (tableText[aKey].toLowerCase() === (researchSplit[bKey].toLowerCase())) {
                    tableText[aKey] = <b>{tableText[aKey]}</b>
                }
            }
        }
    }

    return tableText
}