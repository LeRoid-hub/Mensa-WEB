import React, { useEffect, useState } from 'react';
import { Mensa } from '../types/Mensa';
import CounterDisplay from './CounterDisplay';

interface MensaProps {
  mensa: Mensa;
}

const MensaDisplay: React.FC<MensaProps> = ({ mensa }) => {
    const [mensen, setMensa] = useState<Mensa | null>(null);

    useEffect(() => {
        fetch('https://mensa.barfuss.email/mensa/bremen/mensa-neustadtswall', {
            method: 'GET',
            mode: 'cors',

        })
            .then((response) => {
                console.log(response.body);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setMensa(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">{mensa.name}</h1>
            {mensa.counter?.length > 0 ? (
                mensa.counter.map((counter, index) => <CounterDisplay key={index} counter={counter} />)
            ) : null}
        </>
    );
};

export default MensaDisplay;