import React from 'react'

function MusicContainer() {
    return (
        <>
            <h1>Music Player</h1>

            <div className="music-container" id="music-container">
                <div className="music-info">
                    <h4 id="title"></h4>
                    <div className="progress-container" id="progress-container">
                        <div className="progress" id="progress"></div>
                    </div>
                </div>

                <audio src="music/LaalDupatta.mp3" id="audio"></audio>

                <div className="img-container">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1706026345890-9919ade537cb?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="music-cover"
                        id="cover"
                    />
                </div>
                <div className="navigation">
                    <button id="prev" className="action-btn">
                        <i className="fas fa-backward"></i>
                    </button>
                    <button id="play" className="action-btn action-btn-big">
                        <i className="fas fa-play"></i>
                    </button>
                    <button id="next" className="action-btn">
                        <i className="fas fa-forward"></i>
                    </button>
                </div>
            </div>

            <script type="module" src="/src/MusicPlayer.js"></script>
        </>
    )
}

export default MusicContainer

