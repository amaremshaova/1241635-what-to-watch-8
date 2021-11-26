import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';

/*type UserAccountProps = {
  authorizationStatus : AuthorizationStatus,
  logoutAction : () => void;
}*/

function UserAccount():JSX.Element{

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  return(
    <ul className="user-block">
      <li className="user-block__item">
        <Link className="user-block__avatar" to={AppRoute.MyList}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </li>
      <li className="user-block__item">
        <Link to='/' className="user-block__link" onClick={()=>dispatch(logoutAction)}>{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</Link>
      </li>
    </ul>
  );
}

export default UserAccount;
