import React,{useEffect,useState} from 'react'
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import axios from 'axios'
import { banner_url, baseImage } from "../Requests";
import Button from './Button';

const Banner = () => {
  const [banner,setBanner]=useState([])

  const generateRandomIndex = () => Math.floor(Math.random() * 20);
  
  useEffect(()=>{
    axios.get(banner_url).then((response) => setBanner(response.data.results[generateRandomIndex()]));
  },[]);
  console.log(banner)
  const { backdrop_path, original_title, overview, title,original_name } = banner;
  console.log(original_title||original_name)
  function TruncatedText({ text, lines = 4 }) {
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleIsTruncated = () => {
        setIsTruncated(!isTruncated);
    };

    return (
        <p onClick={toggleIsTruncated} className={`text-sm ${isTruncated ? 'line-clamp-4' : ''}`}>
            {text}
            {/* <span className="text-blue-500 cursor-pointer">{isTruncated ? ' View More' : ' View Less'}</span> */}
        </p>
    );
}
  
  return (
    <div className='w-full h-[600px] text-white '>
      <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
      <img className="w-full h-full object-cover " src={baseImage + backdrop_path} alt="" />
      <div className="w-1/3 absolute left-10 bottom-40 sm:left-28 sm:bottom-50 flex flex-col ">
            {/* Info */}
            <h1 className={`sm:text-4xl text-sm text-white font-medium sm:my-0 my-5 py-5 ${(original_title || original_name) && (original_title || original_name).length > 50 ? 'text-xs transform scale-x-75' : ''}`}>{ original_title || original_name}</h1>
            <TruncatedText text={overview} lines={5} />
            <div className="flex mt-5">
                {/* buttons */}
                <Button style={"bg-[#fefefe] text-black hover:bg-[#d2d9d8] "} icon={<FaPlay />} text={"Play"} />
                <Button style={"bg-[#6d6d6db3] text-white hover:opacity-[.8]"} icon={<FaInfoCircle />} text={"Info"} />
            </div>
        </div>

    </div>
  )
}

export default Banner