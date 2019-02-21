import React from 'react'
import Navbar from './Navbar'
import InfoSection from './InfoSection'
import Services from './Services'
import Footer from './Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <InfoSection />
            <Services />
            <Footer />
            The Great Salt Lake is the center of the universe.
        </div>
    )
}

export default App