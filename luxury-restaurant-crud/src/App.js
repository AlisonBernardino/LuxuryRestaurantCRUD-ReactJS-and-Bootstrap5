import { useState } from 'react';
import './App.css';
import RestaurantForm from './components/RestaurantForm';
import Restaurant from './components/Restaurant';
import RestaurantsList from './components/RestaurantsList';

let initialState = [
  {
    id: 1,
    title: 'FiveStar plaza Restaurant',
    rating: '5',
    description: '"Comfort, beauty, variety. All for you"'
  },
  {
    id: 2,
    title: 'Blue Hall Restaurant',
    rating: '4',
    description: '"A good place to enjoy your time"'
  },
];

function App() {
  const [restaurants, setRestaurants] = useState(initialState)

  // Making an "Add" function through the pure JS method
  function addRestaurant(event) {
    event.preventDefault();

    const restaurant = {
      id: document.getElementById('idArea').value,
      title: document.getElementById('titleArea').value,
      rating: document.getElementById('ratingArea').value,
      description: document.getElementById('descriptionArea').value,
    }
    setRestaurants([...restaurants, { ...restaurant }]);
  }

  function removeRestaurant(id) {
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
    setRestaurants([...filteredRestaurants]);
  }

  return (
    <>
      <RestaurantForm
        addRestaurant={addRestaurant}
        restaurants={restaurants} />
      <RestaurantsList
        restaurants={restaurants}
        removeRestaurant={removeRestaurant} />
    </>
  );
}

export default App;
