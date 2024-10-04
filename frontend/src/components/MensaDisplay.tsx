import React, { useEffect, useState } from 'react';
import { Mensa } from '../types/Mensa';
import CounterDisplay from './CounterDisplay';
import { Menu } from '../types/Menu';

const MensaDisplay: React.FC = () => {
    const [items, setItems] = useState<Mensa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Example API call
        const fetchData = async () => {
            try {
                const response = await fetch('https://mensa.barfuss.email/mensa/bremen/mensa-neustadtswall');
                const json = await response.json();

                // Extract the array from the nested JSON
                console.log(json);
                setItems(json)
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

    var menus: Menu[] = items.Days[0].Menu;
    console.log(menus);

    return (
        <div>
            {menus.map((item) => (
                console.log(item),
                // Pass each item to the ItemComponent
                <CounterDisplay menu={item} />
            ))}
        </div>
    );
};

export default MensaDisplay
