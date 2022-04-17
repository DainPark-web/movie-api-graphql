import { Helmet } from "react-helmet-async";
import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import styled from "styled-components";

const GET_MOVIES = gql`
 { 
    movies{
    id
    title
    medium_cover_image
    isLiked @client
  }
  }
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    height: 300px;
    background: linear-gradient(90deg, rgba(238,174,225,1) 0%, rgba(233,162,148,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-bottom: 20px;
`

const Title = styled.div`
    font-size: 40px;
    font-weight: 600;

`
const Subtitle = styled.div`
    font-size: 20px;
`


const MoviesContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 0px;
    grid-gap: 20px;
    

`

const Home =() => {
    const {loading, error, data} =useQuery(GET_MOVIES);
    console.log(error);
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Container>
        <Header>
            <Title>Apollo 2020</Title>
            <Subtitle>I love GraphQL</Subtitle>
        </Header>
        {loading && <div>Loading...</div>}
        <MoviesContainer>
        {!loading && data.movies && 
            data.movies.map((e,i) => {
                return (
                    <Movie key={e.id} title={e.title} isLiked={e.isLiked} image={e.medium_cover_image} rating={e.rating} summary={e.summary} idN={e.id} />                    
                )
            })
        }
        </MoviesContainer>
        </Container>

        </>
        
    )

    

    
}

export default Home;