import { useState } from 'react'

export default function RestaurantForm(props) {
    const [restaurant, setRestaurant] = useState({});

    const handleInput = (item) => {
        const { title, value } = item.target;
        console.log(value);

        setRestaurant({ ...restaurant, [title]: value });
    }

    // {Math.max.apply(Math, props.restaurants.map((place) => place.id)) + 1}

    return (
        <form className="row g-3">
            <div className="col-md-3">
                <label className="form-label">ID: </label>
                <input title="idArea" id="idArea" onChange={handleInput} type="text" className="form-control" readOnly value={restaurant.id} />
            </div>
            <div className="col-md-3">
                <label className="form-label">Title: </label>
                <input title="titleArea" id="titleArea" onChange={handleInput} type="text" className="form-control" value={restaurant.title} />
            </div>
            <div className="col-md-3">
                <label className="form-label">Rating: </label>
                <select title="ratingArea" id="ratingArea" name="rating" onChange={handleInput} className="form-select" value={restaurant.rating}>
                    <option defaultValue="0"> Choose an option... </option>
                    <option value="1"> 01 (One) star </option>
                    <option value="2"> 02 (Two) stars </option>
                    <option value="3"> 03 (Three) stars </option>
                    <option value="4"> 04 (Four) stars </option>
                    <option value="5"> 05 (Five) stars </option>
                </select>
            </div>
            <div className="col-md-3">
                <label className="form-label">Description: </label>
                <input title="descriptionArea" id="descriptionArea" type="text" onChange={handleInput} className="form-control" value={restaurant.description}/>
            </div>
            <div className="col-12">
                <button className="btn btn-success" onClick={props.addRestaurant}> Add </button>
            </div>
        </form>
    )
}

