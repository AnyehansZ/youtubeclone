import { Link } from 'react-router-dom';
import '../../styles/not_found.css';

function NotFound() {
  return (
    <div className="not_found_container">
      <div className="not_found_content">
        <h1 className="not_found_code">404</h1>
        <h2 className="not_found_title">Page Not Found</h2>
        <p className="not_found_message">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="not_found_button">Go Back Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
