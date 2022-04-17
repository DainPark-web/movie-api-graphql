import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
    height: 480px;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Poster = styled.div`
    background-image: url(${props => props.bg});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
`

const Movie = ({title,summary,rating, image, idN}) => {
    return (
        <Container to={`/${idN}`}>
            <Poster bg={image} />
            <div>
            <button>Like</button>
            </div>
        </Container>
    )
}

export default Movie;