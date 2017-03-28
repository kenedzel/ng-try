import { Routes, RouterModule } from  '@angular/router';

import { HumanComponent } from './human.component';

import { HumanDetailsComponent } from './human-details.component';

const routes: Routes = [
    {
        path: 'humans',
        component: HumanComponent,
    },
    {
        path: 'humans/:id',
        component: HumanComponent,
    },
    {
        path: '',
        redirectTo: '/humans',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);