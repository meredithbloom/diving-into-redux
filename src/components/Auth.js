
import classes from './Auth.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { authActions } from '../app/auth-slice';
import {useState} from 'react'

const Auth = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticated)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(authActions.login())
    setEmail('')
    setPassword('')

  }

  const changeEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const changePasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={changeEmailHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={changePasswordHandler}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
