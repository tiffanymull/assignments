import React from 'react'
import StrangeWeatherVid from './StrangeWeatherVid'

const Home = () => {
    return (
        <div className="wrapper">
            <div className="homeContent">
                <h1>Home</h1>
                {/* Not using pageIntro yet */}
                  <div className="pageIntro">
                    <p>Welcome to Aftcasts, where you can obsess about the climes of other times.  
                        Most people are interested in the weather of yesteryear, but if you’re a 
                        freak who likes anticipating rainstorms, we won’t judge.</p>
                    {/* <a href="https://www.youtube.com/watch?v=UftUkRcRC_Q">Strange Weather</a> */}
                    <StrangeWeatherVid />
                    <br></br> <br></br>
                  </div>
            </div>
        </div>
    )
}

export default Home