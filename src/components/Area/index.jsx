import { useState } from 'react'
import './style.css'

import Trip from '../Trip';

function Area(props) {
  const tripData = {}
  const allTrips = Array(props.area_nTrips).fill().map((el, index)=>`${props.area_id}T${index}`)
  for(let trpID of allTrips){
    tripData[trpID] = {wk: null, id:null}
  }
  const [trip, setTrip] = useState(tripData)

  function saveWorkers(worker, id_trip){
    setTrip(trip, trip[id_trip]={wk: worker, id:id_trip});
    console.log(trip, worker, id_trip)
  }

  function checkWorkers(w, id){
    for(let trp of allTrips){
      if(trp.wk === w){
        document.getElementById(id).style.backgroundColor = 'red';
      }
      else{
        document.getElementById(id).style.backgroundColor = 'green';
      }
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