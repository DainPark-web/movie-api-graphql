import { Helmet } from "react-helmet-async";
import { gql, useQuery } from "@apollo/client";


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

    if(loading){
        return (
            <div>
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <div>Loading...</div>
            </div>
            )
    }


    if(!loading){
        return (
            <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {
                data.movies.map((e,i) => {
                    return (
                        <div key={i}>{e.title}</div>
                    )
                })
            }
            </>
            
        )

    }

    
}

export default Home;