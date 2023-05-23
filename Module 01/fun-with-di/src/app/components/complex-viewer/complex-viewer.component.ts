import { Component, Inject } from '@angular/core';
import { COMPLEX } from 'src/app/tokens/complex.token';

@Component({
  selector: 'app-complex-viewer',
  templateUrl: './complex-viewer.component.html',
  styleUrls: ['./complex-viewer.component.css']
})
export class ComplexViewerComponent {
  constructor(
    @Inject(COMPLEX) public complex: number
  ){}


  whenTheMouseMoves() {
    
  }

}
