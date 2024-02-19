import { useState, useEffect } from 'react';

const VideoPlayer = ({ trailerLink }) => {
    return (
        <>
            
            <iframe
                className="w-full h-full"
                src={trailerLink}
                allow="autoplay; encrypted-media"
                title="Trailer"
                allowFullScreen
            ></iframe>
        </>
    );
}

export default VideoPlayer;