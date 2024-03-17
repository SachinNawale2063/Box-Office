import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getShowbyId } from '../api/tvmaze.js';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData.jsx';
import Details from '../components/shows/Details.jsx';
import Seasons from '../components/shows/Seasons.jsx';
import Cast from '../components/shows/Cast.jsx';

// const useShowById = (showId) =>{

//   const [showData, setShowData] = useState(null);
//   const [ showError, setShowError ] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowbyId(showId);
//         setShowData(data);
//       } catch (error) {
//         setShowError(null)
//       }

//     }
//     fetchData();
//   }, [showId])

//   return {showData, showError}
// }

const Show = () => {

  const { showId } = useParams();
  // const {showData, showError} = useShowById(showId)

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowbyId(showId),
    refetchOnWindowFocus : false,
  })

  // const navigate = useNavigate()

  // const onGoback = () =>{
  //   navigate('/');
  // }


  if (showError) {
    return <div>We have an error : {showError.message}</div>
  }
  if (showData) {
    return (
      <div>

        {/* <button type="button" onClick={onGoback}>Go Back to Home</button> */}
        <Link to='/'>Go Back to Home</Link>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}

        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered = {showData.premiered}
            network = {showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast}/>
        </div>
      </div>
    )
  }

  return (
    <div>
      data is loading........
    </div>
  )
}

export default Show
