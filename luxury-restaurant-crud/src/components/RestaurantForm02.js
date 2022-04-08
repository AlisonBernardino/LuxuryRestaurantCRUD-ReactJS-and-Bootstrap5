import {useState, useEffect} from 'react';

const startingRestaurant= {
    id: 0,
    title: '',
    rating: 0,
    description: '',
};

export default function RestaurantForm(props){
    const [place, setPlace] = useState(currentRestaurant());

    useEffect(() => {
        if(props.selectedRestaurant.id !== 0) setPlace(props.selectedRestaurant);
    }, [props.selectedRestaurant]);

    const handleTextInput = (item) => {
        const {definition, value} = item.target;

        setPlace({...place, [definition]: value});
    };

    const handleSubmit = (item) => {
        item.preventDefault();

        if(Response.selectedRestaurant.id !== 0) props.updateRestaurant(place);
        else props.addRestaurant(place);

        setPlace(startingRestaurant);
    };

    const handleCancel = (item) => {
        item.preventDefault();

        props.cancelConfiguration();

        setPlace(startingRestaurant);
    };

    function currentRestaurant(){
        if(props.selectedRestaurant !== 0){
            return props.selectedRestaurant;
        }else{
            return startingRestaurant;
        }
    }

    return(
    <>
        <h1> Restaurant {place.id !== 0 ? place.id : ''}</h1>
        <form className='row g-3' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label className='form-label'> Title</label>
                <input name='title' value={place.title}
                onChamge={handleTextInput}
                id='title'
                type='text'
                className='form-control'
            </div>
        </form>
    </>)
}