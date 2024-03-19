import { useReducer, useEffect } from "react"
import ShowCard from "./ShowCard"
import { useStarredShows } from "../../lib/useStarred.js"
import { FlexGrid } from "../common/FlexGrid.jsx"


const ShowGrid = ({ shows }) => {

    // const [starredShows, dispatchStarredShows] = usePersistedReducer(starredShowsReducer, [], 'starredShows');
    const [starredShows, dispatchStarredShows] = useStarredShows()

    const onStarMeClick = (showId) => {
        const isStarred = starredShows.includes(showId);
        if(isStarred){
            dispatchStarredShows({type:'UNSTAR', showId})
        }else{
            dispatchStarredShows({type:'STAR', showId})
        }
    }

    return (
        <FlexGrid>
            {shows.map(data => (
                <ShowCard key={data.show.id}
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : "./image-not-found.jpeg"}
                    summary={data.show.summary} id={data.show.id}
                    onStarMeClick={onStarMeClick}
                    isStarred={starredShows.includes(data.show.id)}
                />
            ))}
        </FlexGrid>
    )
}

export default ShowGrid
