import React from 'react'
import mascot from '../Images/mascot3.png';
import classes from './Image.module.css'

const Image = () => {
  return (
    <img src={mascot} alt='NoImage' className={classes.img}></img>
  )
}

export default Image