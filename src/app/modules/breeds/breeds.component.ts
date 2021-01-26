import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BreedsFacade } from 'src/app/+state/breeds.facade';
import { Breeds } from 'src/app/resources/interfaces/breeds.interface';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit, OnDestroy {
  breeds$ = this.breedsFacade.breeds$;

  private unsubscribeSubject = new Subject<void>();

  constructor(private breedsFacade: BreedsFacade) {
  }

  ngOnInit(): void {
    this.breedsFacade.getBreeds();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
