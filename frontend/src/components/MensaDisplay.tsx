import React, { useEffect, useState } from 'react';
import { Mensa } from '../types/Mensa';
import { Counter } from '../types/Counter';
import CounterDisplay from './CounterDisplay';

const MensaDisplay: React.FC = () => {
    const [items, setItems] = useState<Counter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Example API call
        const fetchData = async () => {
            try {
                const response = await fetch('https://mensa.barfuss.email/mensa/bremen/mensa-neustadtswall');
                const json = await response.json();

                // Extract the array from the nested JSON
                setItems(json.Days[0].Menu)
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {items.map((item) => (
                console.log(item),
                // Pass each item to the ItemComponent
                <CounterDisplay counter={item} />
            ))}
        </div>
    );
};

export default MensaDisplay
