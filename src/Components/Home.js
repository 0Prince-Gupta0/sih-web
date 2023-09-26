import React from 'react'
import classes from './Home.module.css';
import Image from './Image';
const Home = () => {
  return (
    <div className={classes.home}>
        <Image />
        <h1>
        बच्चों की टूटती आवाज़ को सुधारने में मदद: उनकी आवाज़ को सुंदर और फ्लुएंट बनाने में सहायक!
        </h1>      
    </div>
  )
}

export default Home