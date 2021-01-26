import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreedsFacade } from 'src/app/+state/breeds.facade';
import { Breeds } from 'src/app/resources/interfaces/Breeds';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit, OnDestroy {

  // data!: Breeds;
  // breeds!: string[];
  breeds!: any;
  private unsubscribeSubject = new Subject<void>();

  constructor(private breedsFacade: BreedsFacade) { }

  ngOnInit(): void {
    this.breedsFacade.getBreeds();

    this.breedsFacade.breedsResponse().subscribe((breeds: Breeds) => {
      // this.data = breeds;
      // this.breeds = Object.keys(this.data);
      this.breeds = breeds;
      console.log(breeds);
      console.log(typeof breeds);
    })

    takeUntil(this.unsubscribeSubject);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
