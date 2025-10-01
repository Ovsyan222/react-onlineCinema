import { memo, useState } from "react";

function FavoriteButton() {
    const [isFavorive, setIsFavorite] = useState(false)

    return <button className="btn" onClick={() => setIsFavorite(!isFavorive)}>
        {isFavorive ? '❤️' : '🤍'}
    </button>
}

export default memo(FavoriteButton)