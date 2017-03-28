import { Injectable } from '@angular/core';
import { Human } from './human';

    const PEOPLE : Human[] = [
        {
            id: 1,
            name: 'John Doe',
            occupation: 'Skywalker',
            gender: 'Male'
        },
        {
            id: 2,
            name: 'Miss Jackson',
            occupation: 'Teller',
            gender: 'Female'
        },
        {
            id: 3,
            name: 'Jane Doe',
            occupation: 'Skywalker',
            gender: 'Female'
        }
    ];

@Injectable()
export  class HumanService{
        getAll() : Human[]
        {
            return PEOPLE.map(p => this.clone(p));
        }

        get(id : number) : Human
        {
            return PEOPLE.find(p => p.id === id);
        }
        
        save(human : Human)
        {
            let originalHuman = PEOPLE.find(p => p.id === human.id);
            if (originalHuman) Object.assign(originalHuman, human);
        }

        private clone(object: any)
        {
            return JSON.parse(JSON.stringify(object));
        }

    }
