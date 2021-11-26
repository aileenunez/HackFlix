
import { Link } from "react-router-dom"

const Catalogue = function({movies}){
    return(
<ul className="catalogue">
        {
          movies.map(function(mov){
            return(
            <li key={mov.id}>
              <Link to={`/movie/${mov.id}`}>
              <img
              src={`http://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              alt={`Poster for the movie: ${mov.original_title}`}
              />
              </Link>
            </li>)
          })
        }
        </ul>)

}

export default Catalogue