import {useState, useEffect} from 'react';

const startingRestaurant = {
    ID : 0,
    title: '',
    rating: 0,
    description: '',
};

export default function RestaurantForm(props){
    const [place, setPlace] = useState(currentRestaurant());

    useEffect(() => {
        if(props.selectedRestaurant.ID !== 0) setPlace(props.selectedRestaurant);
    }, [props.selectedRestaurant]);

    const handleTextInput = (component) => {
        const {element, value} = component.target;
        setPlace({...place, [element]: value});
    }
}