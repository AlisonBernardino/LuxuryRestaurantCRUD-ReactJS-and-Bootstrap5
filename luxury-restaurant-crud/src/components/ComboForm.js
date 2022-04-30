import { useState, useEffect } from 'react';

const startingCombo = {
    ID: 0,
    title: '',
    rating: 0,
    description: '',
};

export default function ComboForm(props) {
    const [combo, setCombo] = useState(setCurrentCombo());

    useEffect(() => {
        // ativSelecionada == selectedCombo
        if (props.selectedCombo.ID !== 0) setCombo(props.selectedCombo);
    }, [props.selectedCombo]);

    // inputTextHandler = handleTextInput
    const handleTextInput = (element) => {
        // name == title
        const { title, value } = element.target;

        setCombo({ ...combo, [title]: value });
    };

    const handleSubmission = (element) => {
        element.preventDefault();

        // atualizarAtividade == updateCombo
        if (props.selectedCombo.ID !== 0) props.updateCombo(combo);
        else props.addCombo(combo);

        setCombo(startingCombo);
    };

    // handleCancelar == handleCancelOperation
    const handleCancelOperation = (element) => {
        element.preventDefault();

        props.cancelCombo();

        setCombo(startingCombo);
    };

    // 
    function setCurrentCombo() {
        if (props.selectedCombo.ID !== 0) {
            return props.selectedCombo;
        } else {
            return startingCombo;
        }
    }

    return (
        <>
            <h1>Combo {combo.ID !== 0 ? combo.ID : ''}</h1>
            <form className='row g-3' onSubmit={handleSubmission}>
                <div className='col-md-6'>
                    <label className='form-label'> Title: </label>
                    <input name='title'
                        value={combo.title}
                        onChange={handleTextInput}
                        id='title'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Rating: </label>
                    <select name='rating' value={combo.rating}
                        onChange={handleTextInput}
                        id='rating'
                        className='form-select'
                    >
                        <option defaultValue='0'>Select an option...</option>
                        <option value='1'> 1 point </option>
                        <option value='2'> 2 points </option>
                        <option value='3'> 3 points </option>
                        <option value='4'> 4 points (Max) </option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label'> Description </label>
                    <textarea name='description'
                        value={combo.description}
                        onChange={handleTextInput}
                        id='description'
                        type='text'
                        className='form-control'
                    />
                    <hr />
                    </div>
                    <div className='col-12 mt-0'>
                        {combo.ID === 0} ? (<button className='btn-secondary'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i>
                            Add
                            </button>
                        ):(<>
                            <button className='btn btn-success me-2'
                                type='submit'
                            >
                                <i className='fas fa-plus me-2'></i>
                                Save
                        </button>
                            <button className='btn btn-warning'
                                onClick={handleCancelOperation}
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