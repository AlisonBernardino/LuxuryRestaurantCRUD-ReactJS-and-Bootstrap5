import React from 'react'

export default function RestaurantForm(props) {
    return (
        <form className="row g-3">
            <div className="col-md-3">
                <label className="form-label">ID: </label>
                <input id='idArea' type="text" className="form-control" readOnly value={Math.max.apply(Math, props.restaurants.map(place => place.id)) + 1} />
            </div>
            <div className="col-md-3">
                <label className="form-label">Title: </label>
                <input id="titleArea" type="text" className="form-control" />
            </div>
            <div className="col-md-3">
                <label className="form-label">Rating: </label>
                <select id="ratingArea" className="form-select">
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
                <input id="descriptionArea" type="text" className="form-control" />
            </div>
            <div className="col-12">
                <button className="btn btn-success" onClick={props.addRestaurant}> Add </button>
            </div>
        </form>
    )
}

