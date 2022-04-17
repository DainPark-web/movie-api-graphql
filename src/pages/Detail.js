import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id){
            id
            title
            background_image
        }
    }

`

const Detail = () => {
    const {id: paramsID} = useParams();
    console.log(paramsID);

    const {loading, data, error} = useQuery(GET_MOVIE, {
        variables: {id: +paramsID}
    });
    console.log(loading, data, error);

    return (
        <>
        {loading && <div>Loading...</div>}
        {!loading && data.movie && <div>
            <div>{data.movie.title}</div>
            
            
            </div>}
        </>
    )
}

export default Detail;