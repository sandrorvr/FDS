import { useState } from 'react';
import './style.css';
import Area from '../Area';

function Fds(props) {
  //const [count, setCount] = useState(0)
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
  );
}

export default Fds;

