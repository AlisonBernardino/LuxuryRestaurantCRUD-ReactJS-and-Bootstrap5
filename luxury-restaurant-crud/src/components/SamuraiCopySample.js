import React from 'react';

export default function Restaurant02(props) {
    function ratingLabel(parameter) {
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
                return 'Error! Unknown rating. Please, try again';
        }
    }

    function ratingStyle(parameter, icon) {
        switch (parameter) {
            case '1':
                return icon ? 'YourIconGoesHere' : 'success';
            case '2':
                return icon ? 'YourIconGoesHere' : 'success';
            case '3':
                return icon ? 'YourIconGoesHere' : 'success';
            case '4':
                return icon ? 'YourIconGoesHere' : 'success';
            case '5':
                return icon ? 'YourIconGoesHere' : 'success';
            default:
                return 'Error. Rating unknown! Please, try again.';
        }
    }

    return(
    <div className={'card mb-2 shadow-sm border-' + ratingStyle(props.specificRestaurant.rating)
    }
    >
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h4 className="card-title">
                    <span className="badge bg-secondary me-1">
                        {props.specificRestaurant.id}
                    </span>
                    - {props.specificRestaurant.title}
                </h4>
                <h6> Rating:
                    <span className={'ms-1 text-' + ratingStyle(props.specificRestaurant.rating)}>
                        <i className={'me-1 far fa-' + ratingStyle(props.specificRestaurant.rating, true)}></i>
                        {ratingLabel(props.specificRestaurant.rating)}
                    </span>
                </h6>
            </div>
            <p className="card-text">{props.specificRestaurant.description}</p>
            <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-sm btn-primary me-2" onClick={() => props.editRestaurant(props.specificRestaurant.id)}>
                    <i className="fas fa-pen me-2"></i>
                    Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => props.removeRestaurant(props.specificRestaurant.id)}>
                <i className="fas fa-trash me-2"></i>
                </button>
            </div>
        </div>
    </div>
    );
}

