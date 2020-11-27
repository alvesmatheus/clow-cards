import fs from 'fs';
import path from 'path';

import Card from '../models/Card';

const seedDatabase = async () => {
    try {
        const storedCards = await Card.countDocuments();

        if (!storedCards) {
            console.log('Seeding the database...');

            const dataPath = path.join(__dirname, './data/cards.json');
            const cards = JSON.parse(fs.readFileSync(dataPath));
            cards.map((card) => Card.create(card));

            console.log('Database was seeded!');
        }
    } catch (error) {
        console.log('The database could not be seeded');
    }
};

export default seedDatabase;
