

export function ScrollListener(set, sateorigin, statechange) {
    
    window.addEventListener('scroll',() => {
        if (window.scrollY > 70) {
            set(statechange)
        } else if (window.scrollY < 40) {
            set(sateorigin)
        }
        
    })
}
