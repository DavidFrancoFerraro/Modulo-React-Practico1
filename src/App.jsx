
import './App.css'
import { useState } from 'react';
import Card from './assets/Components/UserCars';
import Button from './assets/Components/Button';
import data from './data/user.json';
import colors from './assets/Components/Color';




function App() {

  
    

  function randomData(array) {
    let indexRandomColor = Math.floor(Math.random() * array.length);
    return indexRandomColor;
  }

  let numberRamdon = randomData(data);
  const [indexRamdon, setIndexRamdom] = useState(numberRamdon);

  let color = randomData(colors);
  const variationColor = {
    backgroundColor: colors[color],
    color: colors[color],
  };

  return (

    <div  className="container" style={variationColor} >
      <div className="data">
        {<Card
          name={`${data[indexRamdon].name.title} ${data[indexRamdon].name.first} ${data[indexRamdon].name.last}`}
          picture={`${data[indexRamdon].picture.large}`}
          iconEmail={<i class="fa-solid fa-envelope"></i>}
          email={` ${data[indexRamdon].email}`}
          iconPhone={<i class="fa-solid fa-phone"></i>}
          phone={` ${data[indexRamdon].phone}`}
          iconLocation={<i class="fa-sharp fa-solid fa-location-dot"></i>}
          location={` ${data[indexRamdon].location.country} ${data[indexRamdon].location.state} ${data[indexRamdon].location.city}`}
        />
        }
      </div>
      <div className="container__button" 
      style={
        {backgroundColor:colors[color]}
        }> 
        {<Button
          click={() =>
          setIndexRamdom(randomData(data))}
        icon={<i class="fa-solid fa-shuffle"></i>}
      />}
      </div>

    </div>
  )
}

export default App
