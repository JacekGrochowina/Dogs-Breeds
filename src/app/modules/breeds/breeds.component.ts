import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BreedsFacade } from './+state/breeds.facade';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BreedsComponent implements OnInit, OnDestroy {

  breeds$ = this.breedsFacade.breeds$;
  displayedColumns: string[] = ['name', 'action'];
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedBreed!: [string, string[]] | null;

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
