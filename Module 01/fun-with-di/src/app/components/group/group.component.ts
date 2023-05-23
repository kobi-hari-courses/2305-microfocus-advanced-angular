import { Component, Injector } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    {
      provide: AdditionService, 
      useClass: AdditionService
    }
  ]
})
export class GroupComponent {
  constructor() {
  }

}
