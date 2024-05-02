import React from 'react'
import './playVideo.css'
const PlayVideo = ({closeVideo,video}) => {
    return (
        <>
           
           <div className="modals">
          
            <div className="modals-container">
            <div className="modals-title">
                <button onClick={()=>closeVideo(false)}>x</button>
            </div>
            <div className="modals-content">
            <iframe
                            title="video player"
                            src={video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
            </div>
             
            </div>
           </div>
        </>
    )
}

export default PlayVideo
