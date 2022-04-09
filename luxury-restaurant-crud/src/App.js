import { useState, useEffect } from 'react';
import './App.css';
import RestaurantForm from './components/RestaurantForm';
import RestaurantList from './components/RestaurantList';

function App() {
  const [index, setIndex] = useState(0);
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState({ ID: 0 });

  useEffect(() => {
    places.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, places.map((item) => item.ID)) + 1);
  }, [places]);


  function addRestaurant(stablishment) {
    setPlaces([...places, { ...stablishmet, ID: index }]);
  }

  function cancelEdition() {
    setPlace({ ID: 0 });
  }

  function updatePlace(stablishment) {
    setPlaces(places.map((item) => (item.ID === stablishment.ID ? stablishment : item))
    );
    setPlaces({ ID: 0 });
  }

  function removePlace(ID) {
    const filteredPlaces = places.filter((place) => place.ID !== ID);
    setPlaces([...filteredPlaces]);
  }

  function selectPlace(ID) {
    const place = places.filter((place) => place.ID === ID);
    setPlace(place[0]);
  }

  return (
    <>
      <RestaurantsForm
        addPlace={addPlace}
        cancelEdition={cancelEdition}
        updatePlace={updatePlace}
        selectedPlace={place}
        places={places}
      />
      <RestaurantsList
        places={places}
        removePlace={removePlace}
        selectPlace={selectPlace}
      />
    </>
  );
}

// import { useState, useEffect } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import RestaurantForm from "./components/RestaurantForm";
// import RestaurantsList from "./components/RestaurantsList";
// import LoginScreen from "./components/LoginScreen";

// let initialState = [
//   {
//     id: 1,
//     title: "FiveStar plaza Restaurant",
//     rating: "5",
//     description: '"Comfort, beauty, variety. All for you"',
//   },
//   {
//     id: 2,
//     title: "Blue Hall Restaurant",
//     rating: "4",
//     description: '"A good place to enjoy your time"',
//   },
// ];

// function App() {
//   const [restaurants, setRestaurants] = useState(initialState);
//   const [restaurant, setRestaurant] = useState({ id: 0 });
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     restaurants.length <= 0
//       ? setIndex(1)
//       : setIndex(
//         Math.max.apply(
//           Math,
//           restaurants.map((place) => place.id)
//         ) + 1
//       );
//   }, [restaurants]);

//   // Making an "Add" function through the pure JS method
//   function addRestaurant(additionElement) {
//     setRestaurants([...restaurants, { ...additionElement, id: index }]);
//   }

//   function removeRestaurant(id) {
//     const filteredRestaurants = restaurants.filter(
//       (restaurant) => restaurant.id !== id
//     );
//     setRestaurants([...filteredRestaurants]);
//   }

//   function updateRestaurant(restaurant) {
//     setRestaurants(
//       restaurants.map((item) => (item.id === restaurant.id ? restaurant : item))
//     );
//     setRestaurant({ id: 0 });
//   }

//   function cancelRestaurantCustomization() {
//     setRestaurant({ id: 0 });
//   }

//   function editRestaurant(id) {
//     const targetedRestaurant = restaurants.filter(
//       (targetedRestaurant) => targetedRestaurant.id === id
//     );
//     setRestaurant(targetedRestaurant[0]);
//   }

//   return (
//     <>
//       <RestaurantForm
//         addRestaurant={addRestaurant}
//         selectedRestaurant={restaurant}
//         updateRestaurant={updateRestaurant}
//         cancelRestaurantCustomization={cancelRestaurantCustomization}
//         restaurants={restaurants}
//       />
//       <RestaurantsList
//         restaurants={restaurants}
//         removeRestaurant={removeRestaurant}
//         editRestaurant={editRestaurant}
//       />
//     </>
//   );
// }

// export default App;
