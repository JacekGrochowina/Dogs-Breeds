import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SettingsFacade } from './../../settings/+state/settings.facade';
import { SubBreedFacade } from './+state/subbreed.facade';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-subbreed',
  templateUrl: './subbreed.component.html',
  styleUrls: ['./subbreed.component.scss']
})
export class SubbreedComponent implements OnInit, OnDestroy {

  breed!: string;
  subbreed!: string | null;
  photoAmount!: number;
  displayPhotoAmount!: number;
  photos!: string[];

  private unsubscribeSubject = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private settingsFacade: SettingsFacade,
    private subBreedFacade: SubBreedFacade
  ) { }

  ngOnInit(): void {
    this.handleParams();
    this.handlePhotos();
    this.handlePhotoAmount();
    this.slicePhotoAmount();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  backHome(): void {
    this.router.navigate(['/']);
  }

  private handleParams(): void {
    let params: ParamMap = this.route.snapshot.paramMap;
    this.breed = params.get('breed')!;

    this.subbreed = !params.get('subbreed') ? null : params.get('subbreed');
  }

  private handlePhotos(): void {
    !this.subbreed ?
    this.subBreedFacade.getBreedPhotos(this.breed) :
    this.subBreedFacade.getSubBreedPhotos(this.breed, this.subbreed);
  }

  private handlePhotoAmount(): void {
    this.settingsFacade.photoAmount$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((displayPhotoAmount: number) => {
        this.displayPhotoAmount = displayPhotoAmount;
      })
  }

  private slicePhotoAmount(): void {
    this.subBreedFacade.photos$
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((photos: string[]) => {
        this.photoAmount = photos.length;
        this.photos = photos.slice(0, this.displayPhotoAmount);
      })
  }
}
