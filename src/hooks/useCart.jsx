import { useState } from "react";

export function useCart() {

    const [isModalShowing, setIsModalShowing] = useState(false);

    function toggle() {
        setIsModalShowing(!isModalShowing);
    }

    return {
        isModalShowing,
        toggle
    }
}