import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedsService } from './../../../services/breeds.service';

@Component({
  selector: 'app-subbreed',
  templateUrl: './subbreed.component.html',
  styleUrls: ['./subbreed.component.scss']
})
export class SubbreedComponent implements OnInit {

  breed!: string;
  subbreed!: string | null;
  images!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breedsService: BreedsService
  ) { }

  ngOnInit(): void {
    this.handleParams();
    this.handleImages();
  }

  backHome(): void {
    this.router.navigate(['/']);
  }

  handleParams(): void {
    let params = this.route.snapshot.paramMap;
    this.breed = String(params.get('breed'));

    if(!params.get('subbreed')) {
      this.subbreed = null;
    } else {
      this.subbreed = String(params.get('subbreed'));
    }
  }

  handleImages(): void {
    if(!this.subbreed) {
      this.breedsService.getBreedImg(this.breed).subscribe(images => {
        this.images = images.message;
      });
    } else {
      this.breedsService.getSubBreedImg(this.breed, this.subbreed).subscribe(images => {
        this.images = images.message;
      });
    }
  }
}
