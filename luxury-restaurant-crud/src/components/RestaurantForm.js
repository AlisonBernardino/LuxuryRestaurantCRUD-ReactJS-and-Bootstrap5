import { useState, useEffect } from "react";

const startingRestaurant = {
  ID: 0,
  title: "",
  rating: 0,
  description: "",
};

export default function RestaurantForm(props) {
  const [place, setPlace] = useState(currentRestaurant());

  useEffect(() => {
    if (props.selectedRestaurant.ID !== 0) setPlace(props.selectedRestaurant);
  }, [props.selectedRestaurant]);

  const handleTextInput = (component) => {
    const { element, value } = component.target;
    setPlace({ ...place, [element]: value });
  };

  const handleSubmission = (item) => {
    item.preventDefault();

    if (props.selectedRestaurant.ID !== 0) props.updateRestaurant(place);
    else props.addRestaurant(place);

    setPlace(startingRestaurant);
  };

  const handleCancellation = (element) => {
    element.preventDefault();

    // cancelarAtividade == cancelItem
    props.cancelItem();

    setPlace(startingRestaurant);
  };

  function configureCurrentRestaurant() {
    if (props.selectedRestaurant.ID !== 0) {
      return props.selectedRestaurant;
    } else {
      return startingRestaurant;
    }
  }

  return (
    <>
      <h1>Restaurant {place.ID !== 0 ? place.ID : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmission}>
        <div className="col-md-6">
          <label className="form-label"> Title: </label>
          <input
            name="title"
            value={place.title}
            onChange={handleTextInput}
            id="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label"> Rating: </label>
          <select
            name="rating"
            value={place.rating}
            onChange={handleTextInput}
            id="rating"
            className="form-select"
          >
            <option defaultValue="0">Select an option...</option>
            <option value="1"> 1 star </option>
            <option value="2"> 2 stars </option>
            <option value="3"> 3 stars </option>
            <option value="4"> 4 stars </option>
            <option value="5"> 5 stars (Max) </option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label"> Description: </label>
          <textarea
            name="description"
            value={place.description}
            onChange={handleTextInput}
            id="description"
            type="text"
            className="form-control"
          />
          <hr />
        </div>
        <div className="col-12 mt-0">
          {place.ID === 0 ? (
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-plus me-2">Add</i>
            </button>
          ) : (
            <>
              <button className="btn btn-success me-2" type="submit">
                <i className="fas fa-plus me-2"></i>
                Save
              </button>
              <button className='btn btn-warning'
              onClick={handleCancellation}
              >
                  <i className='fas fa-plus me-2'></i>
                  Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
