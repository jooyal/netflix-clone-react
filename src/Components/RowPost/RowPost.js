import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { API_KEY, imageBaseUrl } from '../../constants/constants'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [videoId, setVideoId] = useState('')
    const [displayVideo, setDisplayVideo] = useState(false)
    
    const handleImageClick = (movieId)=>{
        // console.log(movieId);
        axios.get('movie/' + movieId + '/videos?api_key=' + API_KEY + '&language=en-US').then((response)=>{
            // console.log(response);

            if(response.data.results[0]===undefined){
                return alert('No video available for this title.')
            }else {
                setVideoId(response.data.results[0].key)
                setDisplayVideo(true)
            }

        }).catch((err)=>{
            if(err.response.status===404){
                alert('No video available for this title.')
            }
        })
    }
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            // console.log(response.data);
            setMovies(response.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [props.url])

    const opts = {
        width: '100%',
        
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
      };

  return (
    <div className='row-post'>
        <h2>{props.title}</h2>
        <div className="row-posters-container">
            {movies.map((obj, index)=>{
                return <div key={index} className="row-poster-container">
                            <img onClick={()=>handleImageClick(obj.id)} className={props.isSmall ? 'row-poster-small' : 'row-poster'} src={imageBaseUrl +'/w500'+ (obj.backdrop_path ? obj.backdrop_path : obj.poster_path)} alt="Poster" />
                            <p style={{maxWidth:'80%'}}>{obj.title ? obj.title : (obj.name ? obj.name : '')}</p>
                        </div>
            })}
        </div>
        {displayVideo && (<div className="video-display">
            <div className="video-card">
                <button className='video-close-button' onClick={()=>{setDisplayVideo(false)}}> <b>X</b> </button>
                <YouTube opts={opts} videoId={videoId}/>
            </div>
        </div>)}
    </div>
  )
}

export default RowPost