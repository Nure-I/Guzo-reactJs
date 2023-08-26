import React,{useEffect} from "react";


// Resim import ediyoruz.
import paris from '../../assets/paris.jpg'
import NewYork from '../../assets/NewYork.jpg'
import Italya from '../../assets/Italya.jpg'
import Turkiye from '../../assets/Turkiye.jpg'
import traveler1 from '../../assets/user1.png'
import traveler2 from '../../assets/user2.png'
import traveler3 from '../../assets/user3.png'
import traveler4 from '../../assets/user4.png'

// AOS import ediyoruz.
import Aos from 'aos'
import 'aos/dist/aos.css'

// tüm verileri görüntülemek için map adlı dizi yöntemini kullanacağız.
const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'Nur',
        socialLink: '@Nur11'
    },

    {
        id: 2,
        destinationImage: NewYork,
        travelerImage: traveler2,
        travelerName: 'Sena',
        socialLink: '@Sena22'
    },

    {
        id: 3,
        destinationImage: Italya,
        travelerImage: traveler3,
        travelerName: 'Ahmet',
        socialLink: '@Ahmet33'
    },

    {
        id: 4,
        destinationImage: Turkiye,
        travelerImage: traveler4,
        travelerName: 'Bektas',
        socialLink: '@Bektas44'
    }
]

const Travelers = () => {

    // UseEffect kullanarak animasyon ekliyoruz.
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">
                    
                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
                            return (
                                // {/* Single passanger card*/}
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                    <img src={destinationImage} className="destinationImage" />
            
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage}  className="travelerImage"/>
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Travelers