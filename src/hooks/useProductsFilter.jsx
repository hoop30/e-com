import { useState } from "react";

export const useProductsFilter = () => {
    const [isShowing, setIsShowing] = useState(false)
    
    function toggle() {     
            setIsShowing(!isShowing)
    }

    return {
        isShowing,
        toggle
    }
}