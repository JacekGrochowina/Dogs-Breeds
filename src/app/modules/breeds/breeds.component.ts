import { Component, OnInit } from '@angular/core';
import { BreedsFacade } from 'src/app/+state/breeds.facade';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  constructor(
    private breedsFacade: BreedsFacade
  ) { }

  ngOnInit(): void {
    this.breedsFacade.getBreeds();
  }

}
