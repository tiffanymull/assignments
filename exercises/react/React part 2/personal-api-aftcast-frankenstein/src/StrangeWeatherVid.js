import React from 'react';
import YouTube from 'react-youtube';

class StrangeWeatherVid extends React.Component {
    render() {
        
        return (
           
           <div className="strangeVid">
            <YouTube
                videoId="UftUkRcRC_Q" className="tatty"
            />
            </div>
        );
    }

}

export default StrangeWeatherVid