import {  Link,useNavigate, useSearchParams } from 'react-router-dom';
import { useState} from 'react';
import classes from './AuthForm.module.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import  {auth} from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Image from './Image';
function AuthForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useAuthState(auth);
  const[use,setuse]=useState();
const navigate=useNavigate();

const[searchParams]=useSearchParams();
const isLogin=searchParams.get('mode')==='login';

const clickHandler=async(e)=>{
  e.preventDefault()  
 
 if(isLogin)
 {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/")
      console.log(user);
      setuse(user);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      window.alert(errorMessage);
  });
 }
 else{

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/auth?mode=login")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        window.alert(errorMessage);
    });
 }
 setEmail("");
 setPassword("");
}
  return (
    <div className={classes.main}>
     <Image/>
    <main className={classes.auth}>
   
      <form className={classes.form}>
        <h1>{isLogin ? 'लॉगिन' : 'रजिस्टर करें'}</h1>
        {error && <h6>{error.message}</h6>}
        <p className={classes.control}>
          <label htmlFor="email">ई-मेल</label>
          <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </p>
        <p className={classes.control}>
          <label htmlFor="image">पासवर्ड</label>
          <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </p>
        <div className={classes.actions}>
           <button onClick={clickHandler}>
            {!isLogin ? 'रजिस्टर करें' : 'लॉगिन'}
            </button>
            </div>
            {isLogin &&  <div>
              
              <h4>अकाउंट नहीं है</h4>
            <Link to={`?mode=${isLogin?'signup':'login'}`}>
              <h4>रजिस्टर करें</h4>
            </Link>
          </div>}
      </form>
    </main>
    </div>
  );
}

export default AuthForm;

