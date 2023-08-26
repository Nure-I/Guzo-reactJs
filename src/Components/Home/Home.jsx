import React,{useEffect} from "react";

// Resim ve video dosyalarını import ediyoruz.

import video from '../../assets/video.mp4'
import aeroplane from "../../assets/takeOff.png"

// AOS import ediyoruz.
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    // UseEffect kullanarak animasyon ekliyoruz.
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="home flex container">

        <div className="mainText">
            <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
        </div>

        <div data-aos='fade-down' data-aos-duration='4500' className="homeImages flex">
            
            <div className="videoDiv">
                <video src={video} autoPlay muted loop className="video"></video>
            </div>

            <img src={aeroplane} className="plane" />
        </div>
    </div>
    
    )
    
}

export default Home