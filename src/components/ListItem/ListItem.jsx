
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useState,useEffect } from 'react'
import axios from "axios";
import { baseImage,API_KEY } from '../../Requests'
import CardShimmer from '../shimmer/CardShimmer';
import VideoPlayer from "../VideoPlayer";

const  ListItem = ({backdrop_path,id})=>{
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [trailerLink, setTrailerLink] = useState("");


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
            if(response.data.results.length >0){
                const trailor_video = response.data.results.find((video)=>video.type === ('Trailer'||'Clip'));

                if(trailor_video){
                    const trailerKey = trailor_video.key;
                    const youtubeUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0`;
                    setTrailerLink(youtubeUrl);
                }else{
                    setTrailerLink("No trailer found");
                }
            }else{
                setTrailerLink("No Videos available");
            }
        })
    },[id]);

    useEffect(() => {
        const image = new Image();
        image.src = baseImage + backdrop_path;
        image.onload = () => {
            setIsLoaded(true);
        };
    }, [backdrop_path]);



    return (
        <>
            {isLoaded ? (
                <div
                    className={`w-56 group h-36 main-color overflow-hidden ml-1.5 cursor-pointer text-white hover:shadow-3xl hover:scale-150 hover:bg-[#252525] transition-all ease-in-out duration-500 rounded-lg`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {!isHovered && (
                        <img
                            className="w-full h-full object-cover group-hover:h-36"
                            src={baseImage + backdrop_path}
                            alt=""
                        />
                    )}
                     {isHovered && trailerLink && (
                        <iframe
                            className="w-full h-full absolute"
                            src={trailerLink}
                            // allow="autoplay; encrypted-media"
                            title="Trailer"
                            allowFullScreen
                        ></iframe>
                    )}

                </div>
            ) : (
                <CardShimmer />
            )}
        </>
    );
}

export default ListItem;