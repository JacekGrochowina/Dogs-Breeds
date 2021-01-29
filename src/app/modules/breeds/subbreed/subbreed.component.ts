import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { BreedsService } from './../../../services/breeds.service';
import { SettingsFacade } from './../../settings/+state/settings.facade';
import { SubBreedFacade } from './+state/subbreed.facade';
import { GetBreedImgResponse } from 'src/app/resources/responses/get-breed-img.response';

@Component({
  selector: 'app-subbreed',
  templateUrl: './subbreed.component.html',
  styleUrls: ['./subbreed.component.scss']
})
export class SubbreedComponent implements OnInit, OnDestroy {

  breed!: string;
  subbreed!: string | null;
  images!: string[];
  imagesAmount!: number;
  displayImagesAmount!: number;

  private photoAmount$!: Subscription;
  private breedsService$!: Subscription;
  private unsubscribeSubject = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breedsService: BreedsService,
    private settingsFacade: SettingsFacade,
    private subBreedFacade: SubBreedFacade
  ) { }

  ngOnInit(): void {
    this.subBreedFacade.getPhotos();

    this.handleParams();
    this.handleImages();
    this.handlePhotoAmount();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();

    this.photoAmount$.unsubscribe();
    this.breedsService$.unsubscribe();
  }

  backHome(): void {
    this.router.navigate(['/']);
  }

  private handlePhotoAmount(): void {
    this.photoAmount$ = this.settingsFacade.photoAmount$
      .subscribe((displayImagesAmount: number) => {
        this.displayImagesAmount = displayImagesAmount;
      });
  }

  private handleParams(): void {
    let params: ParamMap = this.route.snapshot.paramMap;
    this.breed = params.get('breed')!;

    !params.get('subbreed') ? 
      this.subbreed = null :
      this.subbreed = params.get('subbreed');
  }

  private handleImages(): void {
    !this.subbreed ?
      this.breedsService$ = this.breedsService.getBreedImg(this.breed).subscribe(images => {
        this.getImages(images);
      }) :
      this.breedsService$ = this.breedsService.getSubBreedImg(this.breed, this.subbreed).subscribe(images => {
        this.getImages(images);
      });
  }

  private getImages(response: GetBreedImgResponse): void {
    this.images = response.message;
    this.getImagesAmount();
    this.sliceImagesAmount();
  }

  private sliceImagesAmount(): void {
    this.images = this.images.slice(0, this.displayImagesAmount);
  }

  private getImagesAmount(): void {
    this.imagesAmount = this.images.length;
  }
}
