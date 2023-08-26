import React,{useEffect} from "react";


// Icon import ediyoruz
import {BiCalendar} from 'react-icons/bi'
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";

// AOS import ediyoruz.
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {

    // UseEffect kullanarak animasyon ekliyoruz.
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="info section">
            <div className="infoContainer container">

                <div className="titleDiv flex">
                    <h2 data-aos='fade-right' data-aos-duration='2500' >Travel to make memories all around the world</h2>
                    <button data-aos='fade-left' data-aos-duration='2500' className="btn">
                        View All
                    </button>
                </div>

                <div className="cardsDiv flex">

                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCard flex">
                        <div className="iconDiv flex">
                            <BiCalendar className="icon" />
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airliness from your phone and book a flight ticket!</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='3500' className="singleCard flex">
                        <div className="iconDiv flex colorOne">
                            <BsShieldCheck className="icon" />
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can also call airliness from your phone and book a flight ticket!</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='4500' className="singleCard flex">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className="icon" />
                        </div>
                        <span className="cardTitle">Save more</span>
                        <p>You can also call airliness from your phone and book a flight ticket!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info