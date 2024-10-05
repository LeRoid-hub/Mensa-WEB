import React, { useEffect, useState } from 'react';
import { Mensa } from '../types/Mensa';
import CounterDisplay from './CounterDisplay';
import { Menu } from '../types/Menu';

interface MensaProps {
    link: string;
}

const MensaDisplay: React.FC<MensaProps> = ({link}) => {
    const [items, setItems] = useState<Mensa>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Example API call
        const fetchData = async () => {
            try {
                const api = 'https://mensa.barfuss.email/mensa/' + link;
                const response = await fetch(api);
                const json = await response.json();

                // Extract the array from the nested JSON
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

    console.log(items);
    var menus: Menu[] = items?.Days[0].Menu || [];
    console.log(menus);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{items?.Name}</h1>
            {menus.map((item) => (
                // Pass each item to the ItemComponent
                <CounterDisplay menu={item} />
            ))}
        </div>
    );
};

export default MensaDisplay
