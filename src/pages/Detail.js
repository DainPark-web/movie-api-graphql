import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id){
            id
            title
            medium_cover_image
            language
            rating
            summary
        }
    }

`
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
 
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-color: transparent; */

`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });
 console.log(data);
 if(loading){
     return "loading"
 }
 if(!loading){
    return (
        <Container>
          <Column>
            <Title>{data.movie.title}</Title>
            <Subtitle>{data.movie.language} · {data.movie.rating}</Subtitle>
            <Description>{data.movie.summary.length > 100 ? data.movie.summary.slice(0, 100) + "..." : data.movie.summary}</Description>
          </Column>
          <Poster bg={data.movie.medium_cover_image}></Poster>
        </Container>
      );
 }
  

  }