import { useState } from "react"
import { searchForShows, searchForPeople } from "../api/tvmaze.js";
import SearchForm from "../components/SearchForm.jsx";


const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async (option) => {

    try {
      setApiDataError(null);
      let result;
      if (option.searchOption === 'shows') {
        result = await searchForShows(option.q);
      }else{
        result = await searchForPeople(option.q);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  }

  const renderApiData = () => {

    if (apiDataError) {
      return <div>Error Occured : {apiDataError.message}</div>
    }

    if (apiData) {
      return apiData[0].show ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>) : apiData.map(data => <div key={data.person.id}>{data.person.name}</div>)
    }

    return null;
  }


  return (
    <div>

      <SearchForm onSearch={onSearch} />

      <div>
        {renderApiData()}
      </div>
    </div>
  )
}

export default Home
