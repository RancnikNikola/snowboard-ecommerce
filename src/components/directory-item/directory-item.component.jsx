import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

// receive entire object as a prop
const DirectoryItem = ({ category }) => {

    const { imageUrl, title } = category;

    const newTitle = title.replace(/-/g, " ");

    return (
        // <div className="directory-item-container">
          <Link to={`shop/${title.toLowerCase()}`} className="directory-item-container">
            <div className='background-image' 
            style={{
              backgroundImage: `url(${imageUrl})`
            }} />
            <div className="body">
              <h2>{newTitle}</h2>
            </div>
          </Link>
        // </div>
    );
};

export default DirectoryItem;