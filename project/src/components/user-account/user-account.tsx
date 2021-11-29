import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus, USER_AVATAR } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { checkAuthAction, logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import {useHistory} from 'react-router';
import { MouseEvent, useEffect} from 'react';
import { getUserAvatar } from '../../store/user-process/selectors';

function UserAccount():JSX.Element{

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const history = useHistory();
  const avatar = useSelector(getUserAvatar);


  const handleRedirectMyList = () => {
    history.push(AppRoute.MyList);
  };

  useEffect(() =>{
    dispatch(checkAuthAction);
  }, [dispatch]);

  const handleLogout = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(checkAuthAction());
    if(authorizationStatus === AuthorizationStatus.Auth){
      dispatch(logoutAction());
    }
    else{
      history.push(AppRoute.Login);
    }
  };

  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={handleRedirectMyList}>
          <img src={authorizationStatus === AuthorizationStatus.Auth ? avatar : USER_AVATAR} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item" >
        <a href='/'  onClick={(evt) => handleLogout(evt)}
          className="user-block__link"
        >
          {authorizationStatus === AuthorizationStatus.Auth ? 'Sign out': 'Sign in'}
        </a>
      </li>
    </ul>
  );
}

export default UserAccount;
