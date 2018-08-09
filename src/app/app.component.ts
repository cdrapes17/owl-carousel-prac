import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {



  @ViewChild('owlElement') owlElement: OwlCarousel

  title = 'app';
  firstImage = [
    {
      url: '../assets/ozil.jpg',
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
    {
      url: '../assets/7.png',
      description: `7`
    },
    {
      url: '../assets/8.png',
      description: `8.`
    },
  ];

  moveToSlide(index) {
    console.log(index);
    this.owlElement.trigger('to.owl.carousel', index);
  }

  ngOnInit(): void {
    this.images.unshift(this.firstImage[0])
  }

  ngAfterViewInit(): void {
    // find all slides
    setTimeout(() => {
      const slides = Array.from(document.querySelectorAll('.item'));
      slides.forEach(element => {
        const id = element.id.split('-')[1]
        element.addEventListener('click', () => {
          console.log('from comp');
          this.moveToSlide(id)
        })
      });
    }, 0);
  }
}
