import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageBaseUrl } from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
        setMovie(response.data.results[(Math.floor(Math.random()*20))])
        })
    }, [])

    
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageBaseUrl + 'original/' + movie.backdrop_path : ''})`}}>
        <div className="banner-content">
            <h1 className='banner-title'>{movie ? movie.original_title || movie.original_name : ''}</h1>
            <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
            </div>
            <div className='banner-description'>{movie ? movie.overview : ""}</div>
        </div>
        <div className="banner-fade-bottom"></div>
    </div>
  )
}

export default Banner