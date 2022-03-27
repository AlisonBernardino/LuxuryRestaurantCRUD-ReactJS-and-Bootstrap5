import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    description: '5-star plaza Restaurant'
  },
  {
    id: 2,
    description: 'Blue Hall Restaurant'
  },
];

function App() {
  const [restaurants, setRestaurants] = useState(initialState)

  // Making an "Add" function through the pure JS method
  function addRestaurant(event) {
    event.preventDefault();

    const restaurant = {
      id: document.getElementById('idArea').value,
      description: document.getElementById('descriptionArea').value,
    }
    setRestaurants([...restaurants, { ...restaurant }]);
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">ID: </label>
          <input id='idArea' type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Title: </label>
          <input id="descriptionArea" type="text" className="form-control" />
        </div>
        <div class="col-12">
          <button className="btn btn-success" onClick={addRestaurant}> Add </button>
        </div>
      </form>
      <div className='mt-3'>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="card mb-2 shadow">
            <div className="card-body">
              <p className="card-text"> {restaurant.id} - {restaurant.description} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
