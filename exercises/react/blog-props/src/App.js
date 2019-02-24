
import React from 'react'
import Header from './Header'  //means Header is nested in App
import BlogList from './BlogList' //means BlogList is nested in App
import Footer from './Footer' 

const App = () => {
    return (
        <div>
          <Header />
          <BlogList />
            Hi, App.
          <Footer />
        </div>
    )
}




export default App