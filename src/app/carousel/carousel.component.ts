import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { OwlCarousel } from '../../../node_modules/ngx-owl-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('owlElement') owlElement: OwlCarousel
  @Input() firstImage;
  @Input() images;
  @Input() id;
  @Input() options;
  @Output() slideClickedEmitter = new EventEmitter();

  ngOnInit(): void {
    // add first image to beginning of input images
    console.log(this.id, 'from cont');
    
    this.images.unshift(this.firstImage[0]);
  }

  // moveToSlide(index) {
  //   console.log(index);
  //   this.owlElement.trigger('to.owl.carousel', index);
  // }

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
