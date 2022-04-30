import React from 'react';

export default function Client(props){
    function classificationLabel(parameter){
        switch(parameter){
            case '1':
                return 'Low';
            case '2':
                return 'Medium';
            case '3':
                return 'High';
            case '4':
                return 'Maximum';
            default: 
                return 'Undefined reputation. Please, try again';
        }
    }

    function classificationStyle(parameter, icon){
        switch(parameter){
            case '1':
                return icon ? 'frown' : 'danger';
            case '2':
                return icon ? 'meh' : 'primary';
            case '3':
                return icon ? 'smile' : 'success';
            case '4':
                return icon ? 'smile' : 'warning';
            default:
                return 'Undefined style. Please, re-check this data and try again';
        }
    }

    return(
        <div className={
            'card mb-2 shadow-sm border-' + classificationStyle(props.specificClient.classification)
        }
        >
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        <span className='badge bg-primary me-1'>
                            {props.specificClient.ID}
                        </span>
                        - {props.specificClient.title}
                    </h5>
                    <h6>
                        Classification:
                        <span className={
                            'ms-1 text- ' + classificationStyle(props.specificClient.classification)
                        }
                        >
                            <i className={
                                'me-1 far fa-' + classificationStyle(props.specificClient.classification, true)
                            }
                            ></i>
                            {classificationLabel(props.specificClient.classification)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>{props.specificClient.description}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-primary me-2'
                    onClick={() => props.grabClient(props.specificClient.ID)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Edit
                    </button>
                    <button className='btn btn-sm btn-danger'
                    onClick={() => props.removeClient(props.specificClient.ID)}
                    >
                        <i className='fas fa-trash me-2'></i>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

