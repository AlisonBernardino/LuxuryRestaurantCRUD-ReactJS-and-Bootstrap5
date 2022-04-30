import React from 'react';

export default function Restaurant(props){
    function ratingLabel(parameter){
        switch(parameter){
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
                return 'Error! Unknown rating label. Please, re-check this data and try again.';
        }
    }

    function ratingStyle(parameter, icon){
        switch(parameter){
            case '1':
                return icon ? 'starHere' : 'danger';
            case '2':
                return icon ? 'starHere' : 'danger';
            case '3':
                return icon ? 'starHere' : 'primary';
            case '4':
                return icon ? 'starHere' : 'success';
            case '5':
                return icon ? 'starHere' : 'warning';
            default:
                return 'Unknown style. Please, try again.';
        }
    }

    return (
        <div className={'card mb-2 shadow-sm border-' + ratingStyle(props.specificRestaurant.rating)
    }
    >
        <div className='card-body'>
            <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                    <span className='badge bg-secondary me-1'>
                        {props.specificRestaurant.ID}
                    </span>
                    - {props.specificRestaurant}
                </h5>
                <h6>
                    Rating:
                    <span className={'ms-1 text-' + ratingStyle(props.specificRestaurant.rating)
                    }
                    >
                        <i className={'me-1 far fa-' + ratingStyle(props.specificRestaurant.rating, true)
                        }
                        ></i>
                        {ratingLabel(props.specificRestaurant.rating)}
                    </span>
                </h6>
            </div>
            <p className='card-text'>{props.specificRestaurant.description}</p>
            <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-primary me-2'
                onClick={() => props.grabRestaurant(props.specificRestaurant.ID)}
                >
                    <i className='fas fa-pen me-2'></i>
                    Edit
                </button>
                <button className='btn btn-sm btn-danger'
                onClick={() => props.removeRestaurant(props.specificRestaurant.ID)}
                >
                    <i className='fas fa-trash me-2'></i>
                    Remove
                </button>
            </div>
        </div>
    </div>
    );
}