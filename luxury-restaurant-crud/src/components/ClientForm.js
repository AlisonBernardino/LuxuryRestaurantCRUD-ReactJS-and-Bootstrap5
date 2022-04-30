import { useState, useEffect } from 'react';

const startingClient = {
    ID: 0,
    name: '',
    classification: 0,
    description: '',
};

export default function ClientForm(props) {
    const [client, setClient] = useState(currentClient());

    useEffect(() => {
        if (props.selectedClient.ID !== 0) setClient(props.selectedClient);
    }, [props.selectedClient]);

    // e == item
    const handleTextInput = (item) => {
        const { name, value } = item.target;

        setClient({ ...client, [name]: value });
    };

    const handleSubmission = (item) => {
        item.preventDefault();

        if (props.selectedClient.ID !== 0) props.updateClient(client);
        else props.addClient(client);

        setClient(startingClient);
    };

    const handleCancelAction = (item) => {
        item.preventDefault();

        props.cancelClient();

        setClient(startingClient);
    };

    function currentClient() {
        if (props.selectedClient.ID !== 0) {
            return props.selectedClient;
        } else {
            return startingClient;
        }
    }

    return (
        <>
            <h1> Client {client.ID !== 0 ? client.ID : ''}</h1>
            <form className='row g-3' onSubmit={handleSubmission}>
                <div className='col-md-6'>
                    <label className='form-label'> Name: </label>
                    <input name='name'
                        value={client.name}
                        onChange={handleTextInput}
                        id='name'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'> Classification: </label>
                    <select name='classification'
                        value={client.classification}
                        onChange={handleTextInput}
                        id='classification'
                        className='form-select'
                    >
                        <option defaultValue='0'>Select an option...</option>
                        <option value='1'> Low </option>
                        <option value='2'> Medium </option>
                        <option value='3'> High </option>
                        <option value='4'> Maximum </option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label'> Description </label>
                    <textarea name='description'
                        value={client.description}
                        onChange={handleTextInput}
                        id='description'
                        type='text'
                        className='form-control'
                    />
                    <hr />
                </div>
                <div className='col-12 mt-0'>
                    {client.ID === 0 ? (
                        <button className='btn btn-secondary'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i>
                            Add
                        </button>
                    ) : (
                            <>
                                <button className='btn btn-success me-2' type='submit'
                                >
                                    <i className='fas fa-plus me-2'></i>
                                    Save
                                </button>
                                <button className='btn btn-warning'
                                    onClick={handleCancelAction}
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
