import React from 'react';
import './playVideo.css';

const PlayVideo = ({ closeVideo, video }) => {
 
    return (
        <div className="modals">
            <div className="modals-container">
                <div className="modals-title">
                    <button onClick={() => closeVideo(false)}>x</button>
                </div>
                <div className="modals-content">
                    <iframe
                        title="video player"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default PlayVideo;