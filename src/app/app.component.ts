import { Component, ViewChild, AfterViewInit, OnInit, Input } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  options1 = {
    items: 5, dots: false, nav: false, loop: true, margin: 20, slideBy: 1, center: true
  };
  options2 = {
    items: 7, dots: false, nav: false, loop: true, margin: 20, slideBy: 1, center: true
  }
  carousels: Array<CarouselComponent>
  @ViewChild('carousel1') carousel1: CarouselComponent;
  @ViewChild('carousel2') carousel2: CarouselComponent;

  carousel1Id = 'carousel1';
  carousel2Id = 'carousel2';

  ngOnInit(): void {
    // add first image to beginning of input images
    // this.images.unshift(this.firstImage[0]);
    // this.images2.unshift(this.firstImageRamsey[0]);

    // this.populateCarousels(this.carousels, [this.carousel1, this.carousel2])
    this.carousels = [this.carousel1, this.carousel2]
    console.log(this.carousels);

  }

  moveToSlide(index: Array<any>, carousel: CarouselComponent) {
    // find correct carousel
    console.log(carousel);
    console.log(index);
    // temp fix for double call
    if (carousel) return carousel.owlElement.trigger('to.owl.carousel', index[1]);
    // return carousel.owlElement.trigger('to.owl.carousel', index[1])
    // make generic
    // index[0] === 'carousel1' ? this.carousel1.owlElement.trigger('to.owl.carousel', index[1]) : this.carousel2.owlElement.trigger('to.owl.carousel', index[1]);
  }

  findCarousel(carousels: Array<CarouselComponent>, index) {
    console.log(index);
    
    const carousel = carousels.find((carousel) => {
      console.log(carousel)
      return carousel.id === index[0];
    });
    return carousel;
  }

}
