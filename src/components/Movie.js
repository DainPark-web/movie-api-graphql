import { Link } from "react-router-dom";



const Movie = ({title, image, idN}) => {
    return (
        <Link to={`/${idN}`}>
            <div>
                {title}
            </div>
        </Link>
    )
}

export default Movie;