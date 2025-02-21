import { useState } from 'react';

function State3() {
  const [car, setCar] = useState({
    brand: 'Volvo',
    model: '750',
    year: 2010,
    color: 'red',
  });

  const updateCar = () => {
    setCar((prev) => ({
      ...prev,
      year: 2025,
      color: 'black',
    }));
  };

  return (
    <div>
      <h2>useState 3</h2>
      <p>
        I have a {car.color} {car.brand} {car.model} from {car.year}
      </p>
      <button onClick={updateCar}>UPDATE CAR</button>
    </div>
  );
}

export default State3;
