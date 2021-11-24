import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';

type UserAccountProps = {
  authorizationStatus : AuthorizationStatus
}

function UserAccount({authorizationStatus} : UserAccountProps):JSX.Element{
  return(
    <ul className="user-block">
      <li className="user-block__item">
        <Link className="user-block__avatar" to={AppRoute.MyList}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </li>
      <li className="user-block__item">
        <Link to="/" className="user-block__link">{authorizationStatus ? 'Sign out' : 'Sign in'}</Link>
      </li>
    </ul>
  );
}

export default UserAccount;
