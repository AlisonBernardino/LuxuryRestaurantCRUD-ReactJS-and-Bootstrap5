import React from 'react'

export default function Restaurant(props) {
    function setRatingValue(parameter) {
        switch (parameter) {
            case '1':
                return '1 star';
            case '2':
                return '2 stars';
            case '3':
                return '3 stars';
            case '4':
                return '4 stars';
            case '5':
                return '5 stars';
            default:
                return 'Error! Unknown rating. Please, try again.';
        }
    }

    function setRatingIcon(innerItem) {
        switch (innerItem) {
            case '1':
                return 'star';
            case '2':
                return 'star';
            case '3':
                return 'star';
            case '4':
                return 'star';
            case '5':
                return 'star';
            default:
                return 'Error! Unknown icon. Please, try again.';
        }
    }

    function setRatingBorder(selectedTheme) {
        switch (selectedTheme) {
            case '1':
                return 'danger';
            case '2':
                return 'danger';
            case '3':
                return 'primary';
            case '4':
                return 'success';
            case '5':
                return 'warning';
            default:
                return 'Error. Unknown border. Please, re-check this information.';
        }
    }
    return (
        <div className={"card mb-2 shadow border-" + setRatingBorder(props.restaurant.rating)}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                        {props.restaurant.title}
                        <span className="badge rounded-pill bg-warning ms-2"> New </span>
                    </h5>
                    <h6>
                        Rating:
                        <span className={"ms-1 text-" + setRatingBorder(props.restaurant.rating)}>
                            <i className={"fa-solid me-1 fa-" + setRatingIcon(props.restaurant.rating)}></i>
                            x{setRatingValue(props.restaurant.rating)}
                        </span>
                    </h6>
                </div>
                <p className="card-text"> {props.restaurant.description} </p>
                <div className="d-flex justify-content-end pt-2">
                    <button className="btn btn-primary me-2 btn-sm">
                        <i className="fas fa-pen me-2"></i>
                        Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => props.removeRestaurant(props.restaurant.id)}>
                        <i className="fas fa-trash me-2"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}