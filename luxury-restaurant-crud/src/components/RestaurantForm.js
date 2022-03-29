import { useState, useEffect } from 'react';

export default function RestaurantForm(props) {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        console.log("useEffect works!");
    }, []);

    const handleInput = (item) => {
        const { mark, value } = item.target;

        setRestaurant({ ...restaurant, [mark]: value });
    }

    return (
        <form className="row g-3">
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
                <textarea mark="descriptionArea" id="descriptionArea" type="text" onChange={handleInput} className="form-control" value={restaurant.description}/>
            </div>
            <div className="col-12">
                <button className="btn btn-success" onClick={props.addRestaurant}> Add </button>
            </div>
        </form>
    )
}

