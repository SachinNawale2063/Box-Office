import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { getShowbyId } from '../api/tvmaze.js';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData.jsx';
import Details from '../components/shows/Details.jsx';
import Seasons from '../components/shows/Seasons.jsx';
import Cast from '../components/shows/Cast.jsx';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter.jsx';

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
    return <TextCenter>We have an error : {showError.message}</TextCenter>
  }
  if (showData) {
    return (
      <ShowPageWrapper>

        {/* <button type="button" onClick={onGoback}>Go Back to Home</button> */}
        <BackHomeWrapper>

        <Link to='/'>Go Back to Home</Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}

        />

        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered = {showData.premiered}
            network = {showData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast}/>
        </InfoBlock>
      </ShowPageWrapper>
    )
  }

  return (
    <TextCenter>
      data is loading........
    </TextCenter>
  )
}

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
