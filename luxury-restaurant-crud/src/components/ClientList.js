import React from 'react';
import Client from './Client';

export default function ClientList(props){
    reutrn (
        <div className='mt-3'>
            {props.clients.map((specificClient) => (
                <Client
                    key={specificClient.ID}
                    specificClient={specificClient}
                    removeClient={props.removeClient}
                    grabClient={props.grabClient}
                />
            ))}
        </div>
    );
}