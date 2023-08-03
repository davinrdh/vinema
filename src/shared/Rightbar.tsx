import { useEffect, useState } from 'react'
import '../styles/Rightbar.scss'
import { getNowPlaying, getUpcoming } from '../services/Api'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Rightbar = () => {
    const navigator = useNavigate()
    const [upcomings, setUpcomings] = useState()
    const [nowPlaying, setNowPlaying] = useState()
    const [emulatorUp, setEmulatorUp] = useState()
    const [emulatorNow, setEmulatorNow] = useState()

    useEffect(() => {
        getUpcoming().then((res) => {
            setUpcomings(res)
            // console.log(res)
        })
    }, [])

    useEffect(() => {
        getNowPlaying().then((res) => {
            setNowPlaying(res)
            // console.log(res)
        })
    }, [])

    useEffect(() =>{
        const emtup = upcomings
        const emtnow = nowPlaying
        setTimeout(() => {
            setEmulatorNow(emtnow)
            setEmulatorUp(emtup)
        }, 1*1000)
    })


    const settings1 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    };

    const renderUpcoming = () => {
        return upcomings?.map((movie: any, key: number) => {
            return (
                <div className="carousel">
                    <div className="carousel">
                        { emulatorUp && 
                        <div className="movie card" onClick={() => navigator(`/detail/${movie.id}`)} key={key}>
                            <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movie?.poster_path}`} alt="" />
                        </div>}

                        {/* {!emulatorUp && 
                        <Skeleton count={1} width="150px" height="225px" />
                        } */}
                    </div>
                </div>
            )
        })
    }

    const renderNowPlaying = () => {
        return nowPlaying?.map((movie: any, key: number) => {
            return (
                <div className="carousel">
                    <div className="carousel">
                    { emulatorNow && 
                        <div className="movie card" onClick={() => navigator(`/detail/${movie.id}`)} key={key}>
                            <img src={`${import.meta.env.VITE_APP_BASEIMG}/${movie?.poster_path}`} alt="" />
                        </div>}

                        {/* {!emulatorNow && 
                        <Skeleton count={1} width="150px" height="225px" className='mx-auto'/>
                        } */}
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <div className="rightbar">
                {/* <div> */}
                <div>
                    <h2 className='text-center'>Now Playing</h2>
                    <Slider {...settings2}>
                        {renderNowPlaying()}
                    </Slider>
                </div>

                <div>
                    <h2 className='text-center'>Upcoming</h2>
                    <Slider {...settings1}>
                        {renderUpcoming()}
                    </Slider>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Rightbar