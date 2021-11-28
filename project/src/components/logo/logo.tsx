import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useHistory } from 'react-router';

function Logo(): JSX.Element{
  const history = useHistory();

  // eslint-disable-next-line no-console
  console.log();

  return(
    <div className="logo">
      {history.location.pathname === '/' ?
        <div className="logo__link" >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div> :
        <Link to={AppRoute.Main} className="logo__link" >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>}
    </div>
  );
}

export default Logo;
