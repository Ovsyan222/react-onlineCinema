import { useState } from "react";

export function FavoriteButton() {
    const [isFavorive, setIsFavorite] = useState(false)

    return <button onClick={() => setIsFavorite(!isFavorive)}>
        {isFavorive ? '❤️' : '🤍'}
    </button>
}