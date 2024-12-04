import { useQuery } from '@tanstack/react-query'
import { ClipLoader } from 'react-spinners';
import api from '../../api/axios'
import axios from 'axios'
const ArtistsPage = () => {
  const getArtists = async () => {
    const response = await api.get("/artists")
    console.log('fetched')
    return response.data.data
  }

  const { data: artists, isPending, isError, error } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists,
    refetchInterval: 1000 * 60 //one min
  })

  if (isPending) {
    return (
        <div className="loading-container">
          <ClipLoader loading={isPending} size={50} />
        </div>  
      )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className="pt-5 mt-5 border">

    { artists.map(artist => (
        <div className="border">       
          <img src={`${artist.profileImage}`} />
          <h1 className="text-primary"> 
            {artist.name}
          </h1>
      </div>
    ))} 
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    </div>
  )
}

export default ArtistsPage;