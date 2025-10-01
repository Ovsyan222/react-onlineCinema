import { memo, useState } from "react";

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <button 
            className="btn" 
            onClick={(event) => {
                event.stopPropagation()
                setIsFavorite(!isFavorite)
            }}
        >
            {isFavorite ? '❤️' : '🤍'}
        </button>
    );
}

export default memo(FavoriteButton)
