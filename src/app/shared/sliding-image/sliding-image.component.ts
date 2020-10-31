import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'sliding-images',
  templateUrl: './sliding-image.component.html',
  styleUrls: ['./sliding-image.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class SlidingImagesComponent implements OnInit {

  @Input() images;

  constructor() { }

  ngOnInit(): void {
  }

}
