import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreedsFacade } from 'src/app/+state/breeds.facade';
import { BreedsList } from 'src/app/resources/interfaces/BreedsList';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit, OnDestroy {

  data!: BreedsList;
  breeds!: string[];
  private unsubscribeSubject = new Subject<void>();

  constructor(private breedsFacade: BreedsFacade) { }

  ngOnInit(): void {
    this.breedsFacade.getBreeds();

    this.breedsFacade.breedsResponse().subscribe((breeds: BreedsList) => {
      this.data = breeds;
      this.breeds = Object.keys(this.data);
    })
    takeUntil(this.unsubscribeSubject);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
