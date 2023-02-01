import { useState } from 'react'
import './style.css'

function Trip(props) {
  const [data, setData] = useState([]);
  const locs = props.locs;
  return (
    <div id={props.trip_id} className="trip">
                <div className="input-data id-trip">{props.trip_id}</div>
                <div className="input-data h-begin">
                    <select name="h-end" id="">
                        <option value="5">05:00</option>
                        <option value="6">06:00</option>
                        <option value="7">07:00</option>
                        <option value="8">08:00</option>
                    </select>
                </div>
                <div className="input-data">
                    <select name="h-end" id="">
                        <option value="5">17:00</option>
                        <option value="6">18:00</option>
                        <option value="7">19:00</option>
                        <option value="8">20:00</option>
                    </select>
                </div>
                <div className="input-data loc">
                    <select name="local" id="">
                        {
                            locs.map((loc, i) =>{
                                return <option key={i} value={loc}>{loc}</option>
                            })
                        }
                    </select>
                </div>
                <div className="input-data">
                    <select name="hardware" id="">
                        <option value="vtr">VTR</option>
                        <option value="mt">MOTO</option>
                        <option value="po">PO</option>
                    </select>
                </div>
                <div className="input-data worker">
                    <div className="w1 sup">
                        <input type="checkbox" value="sup" name="SUP" />
                        <input 
                            onChange={
                                (e)=>{
                                    props.checkWorkers(e.target.value, props.trip_id)
                                }
                            }
                            onKeyDown={
                                (e)=> {
                                    if(e.key == 'Enter') props.saveWorkers(e.target.value, props.trip_id);
                                }
                            }
                            type="text" 
                            name="Worker1" 
                            id="" 
                        />
                    </div>
                    <div className="w2">
                        <input type="checkbox" value="sup" name="SUP" />
                        <input 
                            onChange={
                                (e)=>{
                                    props.checkWorkers(e.target.value, props.trip_id)
                                }
                            }
                            onKeyDown={
                                (e)=> {
                                    if(e.key == 'Enter') props.saveWorkers(e.target.value, props.trip_id);
                                }
                            }
                            type="text" 
                            name="Worker2" 
                            id="" 
                        />
                    </div>
                </div>
            </div>
  );
}

export default Trip;
