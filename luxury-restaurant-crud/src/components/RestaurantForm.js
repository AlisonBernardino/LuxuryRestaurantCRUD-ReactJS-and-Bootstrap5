import { useState, useEffect } from 'react';

const startingRestaurant = {
    id: 0,
    title: '',
    rating: 0,
    description: ''
}

export default function RestaurantForm(props) {
    const [restaurant, setRestaurant] = useState(setCurrentRestaurant());

    useEffect(() => {
        if (props.selectedRestaurant.id !== 0) {
            setRestaurant(props.selectedRestaurant);
        }
    }, [props.selectedRestaurant]);

    const handleInput = (item) => {
        const { mark, value } = item.target;

        setRestaurant({ ...restaurant, [mark]: value });
    }

    const handleCancelOperation = (item) => {
        item.preventDefault();

        props.cancelRestaurantCustomization();

        setRestaurant(startingRestaurant);
    }

    const handleSubmit = (submitItem) => {
        submitItem.preventDefault();

        if(props.selectedRestaurant.id !== 0){
            props.updateRestaurant(restaurant);
        }else{
            setRestaurant(startingRestaurant);
        }
    }

    function setCurrentRestaurant() {
        if (props.selectedRestaurant !== 0) {
            return props.selectedRestaurant;
        } else {
            return startingRestaurant;
        }
    }

    return (
        <>
        <hr/>
        <h3> Luxury Restaurant - Establishments management </h3>
        <hr/>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Title: </label>
                    <input mark="titleArea" id="titleArea" onChange={handleInput} type="text" className="form-control" value={restaurant.title} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Rating: </label>
                    <select mark="ratingArea" id="ratingArea" name="rating" onChange={handleInput} className="form-select" value={restaurant.rating}>
                        <option defaultValue="0"> Choose an option... </option>
                        <option value="1"> 01 (One) star </option>
                        <option value="2"> 02 (Two) stars </option>
                        <option value="3"> 03 (Three) stars </option>
                        <option value="4"> 04 (Four) stars </option>
                        <option value="5"> 05 (Five) stars </option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Description: </label>
                    <textarea mark="descriptionArea" id="descriptionArea" type="text" onChange={handleInput} className="form-control" value={restaurant.description} />
                </div>
                <div className="col-12">
                    {restaurant.id === 0 ? (<button className="btn btn-success" onClick={props.addRestaurant} type="submit"> Add new + </button>) :
                        (<>
                            <button className="btn btn-primary me-2" type="submit"> Save changes </button>
                            <button className="btn btn-danger" onClick={handleCancelOperation}> Cancel </button>
                        </>)}
                </div>
            </form>
        </>
    )
}

