import './App.css';
import Cars from './components/Cars';
import audi from './Image/audi.jpg';
import bmw from './Image/bmw.jpg';
import mazda from './Image/mazda.jpg';
import suzuki from './Image/suzuki.jpg';

function App() {
  const cars = [
    {
      name: 'Audi',
      make: 'Audi',
      color: 'Gray',
      year: 2022,
      img: audi,
    },
    {
      name: 'BMW',
      make: 'BMW',
      color: 'Dark Blue',
      year: 2020,
      img: bmw,
    },
    {
      name: 'Mazda',
      make: 'Mazda',
      color: 'Gray',
      year: 2019,
      img: mazda,
    },
    {
      name: 'Suzuki',
      make: 'Suzuki',
      color: 'Purple',
      year: 2021,
      img: suzuki,
    },
  ];

  return (
    <div className="App">
      {cars.map((car, index) => (
        <Cars key={index} Car_data={car} />
      ))}
    </div>
  );
}

export default App;
