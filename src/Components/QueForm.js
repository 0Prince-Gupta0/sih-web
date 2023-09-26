import React from 'react'
import classes from './QueForm.module.css';
import { Form, Link } from 'react-router-dom';
import Image from './Image';
const QueForm = () => {
  return (
    <div className={classes.main}>
    <Image />
    <main className={classes.auth}>
      <Form method="post" className={classes.form}>
      <h2>क्या आपको नीचे दी गई किसी भी ध्वनि में कठिनाई का सामना करना पड़ता है?</h2>
      <h4>आप इन ध्वनियों को कभी भी बदल सकते हैं|</h4>
      <div className={classes.control}>
      <input type='radio'></input>
      <label>/ क / - कमरा , किताब</label>
      </div>
      <div className={classes.control}>
      <input type='radio'></input>
      <label>/ प / - पेड़ , पशु</label>
      </div>
      <div className={classes.control}>
      <input type='radio'></input>
      <label>/ त / - तालाब , तारीख</label>
      </div>
     <div className={classes.control}>
     <input type='radio'></input>
      <label>/ स / - सूरज , सफल</label>
     </div>
     <div className={classes.actions}>
          <Link to="/learn">
            <button>
            आगे
            </button>
          </Link>
        </div>
     
      </Form>
    </main>
    </div>
    
  )
}

export default QueForm