import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BreedsService } from './../../../services/breeds.service';
import { SettingsFacade } from './../../settings/+state/settings.facade';
import { SubBreedFacade } from './+state/subbreed.facade';

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
  }

  backHome(): void {
    this.router.navigate(['/']);
  }

  handlePhotoAmount(): void {
    this.settingsFacade.photoAmount$
      .subscribe((displayImagesAmount: number) => {
        this.displayImagesAmount = displayImagesAmount;
      });
  }

  handleParams(): void {
    let params: ParamMap = this.route.snapshot.paramMap;
    this.breed = params.get('breed')!;

    if(!!!params.get('subbreed')) {
      this.subbreed = null;
    } else {
      this.subbreed = params.get('subbreed');
    }
  }

  handleImages(): void {
    if(!!!this.subbreed) {
      this.breedsService.getBreedImg(this.breed).subscribe(images => {
        this.images = images.message;
        this.getImagesAmount();
        this.sliceImagesAmount();
      });
    } else {
      this.breedsService.getSubBreedImg(this.breed, this.subbreed).subscribe(images => {
        this.images = images.message;
        this.getImagesAmount();
        this.sliceImagesAmount();
      });
    }
  }

  sliceImagesAmount(): void {
    this.images = this.images.slice(0, this.displayImagesAmount);
  }

  getImagesAmount(): void {
    this.imagesAmount = this.images.length;
  }
}
