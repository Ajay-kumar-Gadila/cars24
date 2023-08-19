import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'carstwentyfour';

  images: string[] = ['https://assets.cars24.com/production/c2b-website/230810181009/js/d8e03eca1c5e5bcf4363a9191a0a406b.webp', 'https://assets.cars24.com/production/c2b-website/230810181009/js/b826677e31b9d490bc0e9ff5b810e87a.png', 'https://assets.cars24.com/production/c2b-website/230810181009/js/add3515cee57c3f3d36023ce13b5c8e2.png'];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
