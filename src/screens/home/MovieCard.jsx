import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import { Modal } from "../../components/ui/Modal";
import { Link } from "react-router-dom";

export function MovieCard({ image, rating, youTubeTrailer }) {
    const [isOpenTrailer, setIsOpenTrailer] = useState(false);

    return (
        <div 
            className="relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg" 
            onClick={() => setIsOpenTrailer(true)}
        >
            {isOpenTrailer && (
                <Modal onClose={() => setIsOpenTrailer(false)}>
                    <iframe 
                        width="560" 
                        height="315"
                        src={`https://www.youtube.com/embed/${youTubeTrailer}?controls=0`}
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </Modal>
            )}

            <img 
                src={image} 
                alt="Movie Poster" 
                className="w-full h-auto object-cover cursor-pointer"
            />

            <div className="absolute top-2 right-2 z-10 flex gap-2">
                <FavoriteButton />
                <Link 
                    to={`/movie/${youTubeTrailer}`} 
                    className="btn"
                    onClick={(event) => event.stopPropagation()}  
                >
                    🔗
                </Link>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">
                IMDb: {rating}
            </div>
        </div>
    );
}
