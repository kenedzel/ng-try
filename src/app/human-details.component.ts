import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Human } from './human';
import { HumanService } from './human.service';

@Component({
    selector: 'human-details',
    templateUrl: 'app/human-details.html'
})

export class HumanDetailsComponent implements OnInit, OnDestroy{
    @Input() human: Human;
    sub: any;
    genders: string[] = [ 'Male', 'Female'];
    constructor(private humanService : HumanService,
                private route : ActivatedRoute,
                private router : Router) {
    }

    ngOnInit()
    {
        
        this.sub = this.route.params.subscribe(params =>{
        let id = Number.parseInt(params['id']);
        this.human = this.humanService.get(id);
        });
    }

    ngOnDestroy()
    {
        this.sub.unsubscribe(); 
    }
    
    goToHumansList()
    {
        let link= ['/humans'];
        this.router.navigate(link);
    }

    saveHumanDetails()
    {
        alert(`saved! ${JSON.stringify(this.human)}`);
        this.humanService.save(this.human);
    }
}