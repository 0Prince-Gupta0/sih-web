import React from 'react';
import classes from './LearningPlan.module.css';
import { Form,Link } from 'react-router-dom';
import Image from './Image';

const LearningPlan = () => {
  return (
    <div className={classes.main}>
     
      <main className={classes.auth}>
      <Form method="post" className={classes.form}>
      <h2>आपका अपना परीक्षण योजना सफलतापूर्वक तैयार की गई है</h2>
     <div className={classes.actions}>
          <Link to="">
            <button>
            शुरू करें
            </button>
          </Link>
        </div>
      </Form>
    </main>
    <Image/>
    </div>
    
  )
}

export default LearningPlan