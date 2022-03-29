import React from 'react';
import Restaurant from './Restaurant';

export default function RestaurantsList(props) {
    return (
        <div className='mt-3'>
            {props.restaurants.map((restaurant) => (
                <Restaurant key={restaurant.id}
                    restaurant={restaurant}
                    removeRestaurant={props.removeRestaurant}
                    editRestaurant={props.editRestaurant} />
            ))}
        </div>
    )
}