import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
`

const LinkContainer = styled(Link)`
    height: 480px;
`

const Poster = styled.div`
    background-image: url(${props => props.bg});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
`

const Movie = ({title,summary,rating,isLiked, image, idN}) => {
    return (
        <Container>
            <LinkContainer to={`/${idN}`}>
                <Poster bg={image} />
            </LinkContainer>
            <div>
            <button>{isLiked ? "Unlike": "Like"}</button>
            </div>
        </Container>
    )
}

export default Movie;