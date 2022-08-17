

export function ScrollListener(onset, sateorigin, statechange) {
    
    window.addEventListener('scroll',() => {
        if (window.scrollY > 70) {
            onset(statechange)
        } else if (window.scrollY < 40) {
            onset(sateorigin)
        }
        
    })
}
