import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { OwlCarousel } from '../../../node_modules/ngx-owl-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  // needed to use owlCarousel callbacks
  @ViewChild('owlElement') owlElement: OwlCarousel
  // no product image added to start of array
  @Input() firstImage;
  // images (this should come from store)
  @Input() images;
  // id to grab specific carousel
  @Input() id;
  // Owl Carousel options
  @Input() options;
  // slide click emitter
  @Output() slideClickedEmitter = new EventEmitter();

  ngOnInit(): void {
    // add first image to beginning of input images
    this.images.unshift(this.firstImage[0]);
  }

  // method required to add click event to cloned items as well as slides from array
  ngAfterViewInit(): void {
    // setTimeout as temp fix for race condition
    setTimeout(() => {
      // find all slides
      const slides = Array.from(document.querySelectorAll('.item'));
      // for all slides add move to slide when clicked
      slides.forEach(element => {
        const id = element.id.split('-');
        element.addEventListener('click', () => {
          this.slideClickedEmitter.emit(id);
        })
      });
    }, 0);
  }
}
