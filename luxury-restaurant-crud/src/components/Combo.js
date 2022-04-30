import React from 'react';

export default function Combo(props) {
    function comboRating(parameter) {
        switch (parameter) {
            case '1':
                return '1 point';
            case '2':
                return '2 points';
            case '3':
                return '3 points';
            case '4':
                return '4 points';
            default:
                return 'Classification unknown. Please, try again.';
        }
    }

    function ratingStyle(parameter, icon) {
        switch (parameter) {
            case '1':
                return icon ? 'frown' : 'danger';
            case '2':
                return icon ? 'frown' : 'primary';
            case '3':
                return icon ? 'meh' : 'success';
            case '4':
                return icon ? 'smile' : 'warning';
            default:
                return 'Unknow style. Please, try again.';
        }
    }

    return (
        <div className={
            // ativ == specificCombo
            'card mb-2 shadow-sm border-' + ratingStyle(props.specificCombo)
        }
        >
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                        <span className="badge bg-secondary me-1">
                            {props.specificCombo.ID}
                        </span>
                        - {props.specificCombo.title}
                    </h5>
                    <h6>
                        Rating:
                        // prioridade == rating
                        <span className={'ms-1 text-' + ratingStyle(props.specificCombo.rating)
                        }
                        >
                            <i className={
                                'me-1 far fa-' + ratingStyle(props.specificCombo.rating, true)
                            }
                            ></i>
                            {ratingLabel(props.specificCombo.rating)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>{props.specificCombo.description}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-primary me-2'
                    onClick={() => props.grabCombo(props.specificCombo.ID)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Edit
                    </button>
                    <button className='btn btn-sm btn-danger' onClick={() => props.removeCombo(props.specificCombo.ID)}
                    >
                        <i className='fas fa-trash me-2'></i>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

// Reference link:
// https: github.com / vsandrade / react - dotnetcore - efcore / blob / 823761131e60df173137434c6603add9d6278ba8 / pro - atividade - app / src / components / Atividade.js