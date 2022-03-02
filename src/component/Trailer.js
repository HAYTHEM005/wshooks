import React from 'react'
import Youtube from 'react-youtube';
import {useParams,useNavigate} from 'react-router-dom'
const Trailer = ({film}) => {
  const navigate=useNavigate()
  const params = useParams()
  const fil=film.find((el)=>el.id===+params.id)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const onReady=(event)=> {
        
        event.target.pauseVideo();
    }
  return (
    <div>
<Youtube videoId={fil.trailerId} opts={opts} onReady={onReady} />;
<p>{fil.synopsis}</p>
<button onClick={()=>navigate(-1)} >go back </button>
    </div>
  )
}

export default Trailer