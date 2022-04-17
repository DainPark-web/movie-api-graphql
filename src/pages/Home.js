import { Helmet } from "react-helmet-async";
import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";


const GET_MOVIES = gql`
 { 
    movies{
    id
    title
    background_image
  }
  }
`


const Home =() => {
    const {loading, error, data} =useQuery(GET_MOVIES);
    console.log(loading, error, data);

    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        {loading && <div>Loading...</div>}

        {!loading && data.movies && 
            data.movies.map((e,i) => {
                return (
                    <Movie key={e.id} />                    
                )
            })
        }
        </>
        
    )

    

    
}

export default Home;