// COMPONENTS
import { Button } from '../../reusable-components/button/button.jsx';
// FONTAWESOME ICONS 
import { faSearch, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';

export const RudderNav = () => {

  return (
    <nav className="bottom-bar">
      <div className="button-group">
        <Button type="button" handler={null} text={null} modifier="" icon={ faSearch } />
        <Button type="button" handler={null} text={null} modifier="" icon={ faPlus } />
        <Button type="button" handler={null} text={null} modifier="" icon={ faCog } />
      </div>
    </nav>
  )
}