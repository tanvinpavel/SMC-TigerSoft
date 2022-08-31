import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Layout/Header';
import Banner from './Banner/Banner';
import VideoTutorialBody from './VideoTutorialBody/VideoTutorialBody';
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

const VideoTutorial = () => {
    const [homeData, setHomeData] = useState({});
    
    useEffect(()=>{
      (async function(){
        try {
          const {data} = await axios.get("http://localhost:3500/items");
          
          setHomeData(data);
        } catch (error) {
          console.log(error);
        }
      })()
    }, []);

    return (
        <>
            <Header headerData={homeData?.menu_item || []}/>
            <Banner/>
            <VideoTutorialBody/>
        </>
    );
};

export default VideoTutorial;