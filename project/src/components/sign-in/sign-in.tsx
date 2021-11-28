import Logo from '../logo/logo';
import {useRef, FormEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {loginAction} from '../../store/api-actions';
import {PatternSignIn} from '../../const';
import Footer from '../footer/footer';
import { useDispatch } from 'react-redux';

function AuthScreen(): JSX.Element {
  const dispatch = useDispatch();

  const [loginError, setErrorLogin] = useState(false);
  const [passwordError, setErrorPassword] = useState(false);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const history = useHistory();

  const handleCheckLogin = () => {

    if (loginRef.current === null || !loginRef.current.value.match(PatternSignIn.Login)){
      setErrorLogin(true);
    }
    else {
      setErrorLogin(false);
    }
  };

  const handleCheckPassword = () => {

    if (passwordRef.current === null || !passwordRef.current.value.match(PatternSignIn.Password)){
      setErrorPassword(true);
    }
    else{
      setErrorPassword(false);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ((loginRef.current !== null && !loginError && loginRef.current.value !== '')
    && (passwordRef.current !== null && !passwordError && passwordRef.current.value !== '')) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      history.goBack();
    }
  };

  const handleGetErrorMessage = () => {
    if (loginError && passwordError){
      return <p>Please enter a valid email address and password</p>;
    }
    if (loginError) {
      return <p>Please enter a valid email address</p>;
    }
    if (passwordError) {
      return <p>Please enter a valid password</p>;
    }
  };

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={(evt) =>handleSubmit(evt)}>
          { (loginError || passwordError) ?
            <div className="sign-in__message">{handleGetErrorMessage()} </div> : ''}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${loginError ? 'sign-in__field--error' : ''}`} >
              <input  ref={loginRef} className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email" id="user-email"
                onKeyUp={()=>{handleCheckLogin();}}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${passwordError ? 'sign-in__field--error' : ''}`}>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={()=>{handleCheckPassword();}}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );

}

export default AuthScreen;
