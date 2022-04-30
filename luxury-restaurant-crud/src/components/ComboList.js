import React from 'react';
import Combo from './Combo';

export default function ComboList(props){
    return (
        <div className='mt-3'>
            <Combo
                key={specificCombo.ID}
                specificCombo={specificCombo}
                removeCombo={props.removeCombo}
                grabCombo={props.grabCombo}
                />
            ))}
        </div>
    );
}