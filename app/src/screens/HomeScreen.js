
import React,{useState , useEffect} from 'react'
import axios from "axios"
import RoomCard from '../components/RoomCard'

function HomeScreen() {
 const [rooms , setRooms] = useState([])
 const [loading , setLoading] = useState()
 const [error , setError] = useState()

 useEffect(async()=>{
     try {
         setLoading(true)
         const roomData = (await axios.get('/api/rooms/getallrooms')).data
         setRooms(roomData)
         setLoading(false)

     } catch (error) {
         setError(true)
         console.log(error)
         setError(false)
     }
 },[])


    return (
      <>
        <div className='container'>
          <div className="row justify-content-center mt-5">
            {loading ? (
              <h1>Loading...</h1>
            ) : error ? (
              <h1>Error</h1>
            ) : (
              rooms.map((room) => {
                return (
                  <div className="col-md-9 mt-2">
                    <RoomCard room={room} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
}

export default HomeScreen