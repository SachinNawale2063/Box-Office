import { useQuery } from "@tanstack/react-query"
import { useStarredShows } from "../lib/useStarred.js"
import { getShowsbyIds } from "../api/tvmaze.js"
import ShowGrid from "../components/shows/ShowGrid.jsx"
import { TextCenter } from "../components/common/TextCenter.jsx"

const Starred = () => {

  const [starredShowsIds] = useStarredShows()

  const {data:starredShows, error:starredShowsError} = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () => getShowsbyIds(starredShowsIds).then(result => result.map(show => ({show}))),
   
    refetchOnWindowFocus: false,
  })

  if(starredShows?.length === 0){
    return (
      <TextCenter>No Shows were Starred</TextCenter>
    )
  }
  if(starredShows?.length > 0){
    return (
      <ShowGrid shows={starredShows} />
    )
  }
  if(starredShowsError){
    return (
      <TextCenter>
        Error Occured : {starredShowsError.message}
      </TextCenter>
    )
  }

  
  return (
    <TextCenter>
      Shows are loading.......
    </TextCenter>
  )
}

export default Starred
