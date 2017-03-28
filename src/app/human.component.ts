import { Component, OnInit } from '@angular/core';
import { Human } from './human';
import { HumanService } from './human.service';
import { HumanDetailsComponent } from './human-details.component';

@Component({
    selector: 'humans',
    template: `<ul> 
                   <li *ngFor="let person of human"><a href="#" [routerLink]="['/persons', person.id]"  (click)="selectHuman(person)">Name: {{ person.name }}</a></li>
              </ul>
            <human-details [human]="selectedHuman"></human-details>`
})

export class HumanComponent implements OnInit{
    human: Human[] = [];
    selectedHuman : Human;

    constructor(private _humanservice : HumanService)
    {
        this.human = _humanservice.getAll();
    }

    ngOnInit()
    {
        this.human = this._humanservice.getAll();
    }

    selectHuman(person: Human)
    {
        this.selectedHuman = person;
    }
}
