import { Component } from '@angular/core';
import { HumanService } from './human.service'
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <br/><h4>{{notice}}</h4>
              <router-outlet></router-outlet>`,

              providers: [HumanService]
})
export class AppComponent  {
   name = 'Angular'; 
   notice = 'Humans: ';
}
