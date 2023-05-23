import { BlankService } from './../../services/blank.service';
import { Component, Inject } from '@angular/core';
import { FAVORITE_COLOR } from 'src/app/tokens/color.token';
import { COMPLEX } from 'src/app/tokens/complex.token';

@Component({
  selector: 'app-complex-viewer',
  templateUrl: './complex-viewer.component.html',
  styleUrls: ['./complex-viewer.component.css']
})
export class ComplexViewerComponent {
  constructor(
    @Inject(COMPLEX) public complex: number, 
    @Inject(FAVORITE_COLOR) public favoriteColors: string[], 
    private blankService: BlankService
  ){}


  whenTheMouseMoves() {
    
  }

  async bringMeSomeData() {
    await this.blankService.getData();
  }

}
