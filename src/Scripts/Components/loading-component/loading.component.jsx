import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


export const Loading = () => {
  return (
    <>
      <div className="loading">
        <p className="loading__text">Awaiting Login</p>
        <FontAwesomeIcon className="loading__spinner" icon={ faCog } />
      </div>
    </>
  )
}