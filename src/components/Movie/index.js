import {Link} from 'react-router-dom'
import './index.css'

const Movie = props => {
  const {details} = props

  return (
    <li className="movie-item">
      <img
        src={details.posterPath}
        alt={details.title}
        className="movie-item-img"
      />
      <p className="movie-item-title"> {details.title}</p>
      <div className="movie-item-details-container">
        <Link to={`/movie-details/${details.id}`} className="link-btn">
          <button className="movie-details-btn">View Details</button>
        </Link>{' '}
        <p className="movie-item-rating"> {details.rating} Rating </p>
      </div>
    </li>
  )
}

export default Movie
