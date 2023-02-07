import { useState, useContext} from 'react'
import './style.css'

import Trip from '../Trip';

function Area(props) {
  const allTrips = Array(props.area_nTrips).fill().map((el, index)=>`${props.area_id}T${index}`)
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
          />
        })
      }
    </div>
  );
}

export default Area;