import { Component, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// standard images to apply for no product
  firstImage = [
    {
      url: '../assets/ozil.jpg',
      description: 'mad tekkers'
    }
  ]
  firstImageRamsey = [
    {
      url: '../assets/rambo.jpg',
      description: 'mad tekkers'
    }
  ]
  // would get images for both carousels from store
  images = [
    {
      url: '../assets/1.png',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
    },
    {
      url: '../assets/2.png',
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`
    },
    {
      url: '../assets/3.png',
      description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.`
    },
    {
      url: '../assets/4.png',
      description: `4`
    },
    {
      url: '../assets/5.png',
      description: `5.`
    },
    {
      url: '../assets/6.png',
      description: `6.`
    },
  ];
  images2 = [
    {
      url: '../assets/1.png',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
    },
    {
      url: '../assets/2.png',
      description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`
    },
    {
      url: '../assets/3.png',
      description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.`
    },
    {
      url: '../assets/4.png',
      description: `4`
    },
    {
      url: '../assets/5.png',
      description: `5.`
    },
    {
      url: '../assets/6.png',
      description: `6.`
    },
    {
      url: '../assets/7.png',
      description: `7`
    },
    {
      url: '../assets/8.png',
      description: `8.`
    },
    {
      url: '../assets/1.png',
      description: `9`
    },
    {
      url: '../assets/2.png',
      description: `10`
    },
    {
      url: '../assets/3.png',
      description: `11`
    },
    {
      url: '../assets/4.png',
      description: `12`
    },
    {
      url: '../assets/5.png',
      description: `13.`
    },
    {
      url: '../assets/6.png',
      description: `14.`
    },
    {
      url: '../assets/7.png',
      description: `15`
    },
    {
      url: '../assets/8.png',
      description: `16.`
    },
    {
      url: '../assets/7.png',
      description: `17`
    },
    {
      url: '../assets/8.png',
      description: `18.`
    }
  ];
// pass in options for each carousel
  options1 = {
    items: 5, dots: false, nav: false, loop: true, margin: 20, slideBy: 1, center: true
  };
  options2 = {
    items: 7, dots: false, nav: false, loop: true, margin: 20, slideBy: 1, center: true
  }
  // store carousels in array
  carousels: Array<CarouselComponent>
  @ViewChild('carousel1') carousel1: CarouselComponent;
  @ViewChild('carousel2') carousel2: CarouselComponent;

  carousel1Id = 'carousel1';
  carousel2Id = 'carousel2';

  ngOnInit(): void {
    // store carousels
    this.carousels = [this.carousel1, this.carousel2];
  }

  moveToSlide(index: Array<any>, carousel: CarouselComponent) {
    // temp fix for double call
    if (carousel) return carousel.owlElement.trigger('to.owl.carousel', index[1]);
  }

  findCarousel(carousels: Array<CarouselComponent>, index) {
    // find correlating carousel
    return carousels.find((carousel) => carousel.id === index[0]);
  }

}
