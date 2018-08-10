import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
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

  ngOnInit(): void {
    // add first image to beginning of input images
    this.images.unshift(this.firstImage[0]);
    // this.
  }

  moveToSlide(index) {
    console.log(index);
    this.owlElement.trigger('to.owl.carousel', index);
  }

  ngAfterViewInit(): void {
    // setTimeout as temp fix for race condition
    setTimeout(() => {
      // find all slides
      const slides = Array.from(document.querySelectorAll('.item'));
      // for all slides add move to slide when clicked
      slides.forEach(element => {
        const id = element.id.split('-')[1]
        element.addEventListener('click', () => {
          console.log('from comp');
          this.moveToSlide(id);
        })
      });
    }, 0);
  }
}
