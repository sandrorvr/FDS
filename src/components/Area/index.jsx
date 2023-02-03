import { useState } from 'react'
import './style.css'

import Trip from '../Trip';

function Area(props) {
  const allTrips = Array(props.area_nTrips).fill().map((el, index)=>`${props.area_id}T${index}`)
  const [infoArea, setInfoArea] = useState([])

  function saveWorkers(nameWorker, id_trip, wkID){
    setInfoArea([...infoArea, {id:wkID, name:nameWorker, trip:id_trip}])
  }

  function checkWorkers(w, id){
    const trip =  document.getElementById(id);
    if(
      infoArea.map(obj => obj.name).includes(w)
      ){
        trip.style.backgroundColor = 'red';
      }else{
        trip.style.backgroundColor = 'green';
      }
  }

  return (
    <div className="area">
      <div className="info-area">
        <div className="number">{props.area_name}</div>
        <div className="description">{props.area_description}</div>
      </div>
      {
        allTrips.map((el, index) => {
          return <Trip 
            key={`${props.area_id}T${index}`} 
            trip_id={`${props.area_id}T${index}`} 
            locs={props.area_locs} 
            saveWorkers={saveWorkers}
            checkWorkers={checkWorkers}
          />
        })
      }
    </div>
  );
}

export default Area;