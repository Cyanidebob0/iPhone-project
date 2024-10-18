import React ,{useRef, useState,useEffect} from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";

const VideoCarousel = () => {

  const videoRef= useRef([]);
  const videoSpanRef= useRef([]);
  const videoivRef= useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying:false,
  })
  const [loadedData, setLoadedData] = useState([])

  const {isEnd,startPlay,videoId,isLastVideo,isPlaying}=video;

  useEffect(() => {
    if(loadedData.lenth>3){
      if(!isPlaying){
        videoRef.current[videoId].pause();
      }
      else{
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay,videoId,isPlaying,loadedData])
  

  useEffect(() => {
    let span=videoSpanRef.current;

    if(span[videoId]){
      //animate the span
      let anim =gsap.to(span[videoId],{
        onUpdate: ()=>{

        },
        onComplete: ()=>{

        }
      })
    }
  
  }, [videoId,startPlay])
  

  
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div className=" sm:pr-20 pr-10" key={list.id} id="slider">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p className=" md:text-2xl text-xl font-medium" key="text">{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
