import { useState, createContext, useContext} from 'react';
import './style.css';
import Area from '../Area';

export const contextFDS = createContext();

function Fds(props) {

  const [infoArea, setInfoArea] = useState([])

  function saveWorkers(targetElement, id_trip){
    if(targetElement.name != ''){
      setInfoArea([...infoArea, {id:targetElement.name, name:targetElement.value, trip:id_trip}])
      targetElement.classList.toggle('realceValidation')
    }else{
      const indexWK = infoArea.map(obj => obj.name).indexOf(targetElement.name);
      delete infoArea[indexWK];
      setInfoArea(infoArea);
    }
  }

  const areas = [
    { 
      id: 'A001', 
      name: 'Area 2', 
      description: 'Iguatemi - Nordeste - Santa Cruz - Itaigara - Paralela - Aeroporto',
      locs:[
        'Rodoviaria', 'Parque da Cidade', 'Parque de Exposições', 'LIP', 'Wet\'n Wild'
      ],
      nTrips:5
    },
    { 
      id: 'A002', 
      name: 'Area 3', 
      description: 'Iguatemi - Nordeste - Santa Cruz - Itaigara - Paralela - Aeroporto',
      locs:[
        'Rodoviaria', 'Parque da Cidade', 'Parque de Exposições', 'LIP', 'Wet\'n Wild'
      ],
      nTrips:5
    },
    { 
      id: 'A003', 
      name: 'Area 4', 
      description: 'Iguatemi - Nordeste - Santa Cruz - Itaigara - Paralela - Aeroporto',
      locs:[
        'Rodoviaria', 'Parque da Cidade', 'Parque de Exposições', 'LIP', 'Wet\'n Wild'
      ],
      nTrips:5
    }
  ];
  return (
    <contextFDS.Provider value={{saveWorkers: saveWorkers}}>
    <div className="Fds">
      {
        areas.map(area => {

          return <Area
                  key={area.id}
                  area_id={area.id}
                  area_name={area.name}
                  area_description={area.description}
                  area_locs={area.locs}
                  area_nTrips={area.nTrips}
                />
        })
      }
    </div>
    </contextFDS.Provider>
  );
}

export default Fds;

