import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-added-cars',
  templateUrl: './recently-added-cars.component.html',
  styleUrls: ['./recently-added-cars.component.css']
})
export class RecentlyAddedCarsComponent implements OnInit {
  count: number = 0;
  inc: number = 0;
  margin: number = 0;
  slider: HTMLElement | null = null;
  itemDisplay: number = 0;
  itemleft: number = 0;
  itemslide: number = 0;

  ngOnInit(): void {
    this.slider = document.querySelector(".slider-width");
    const sliderContainer = document.querySelector(".slider-container");

    if (sliderContainer) {
      if (screen.width > 990) {
        this.itemDisplay = parseInt(sliderContainer.getAttribute("item-display-d")!, 10);
        this.margin = this.itemDisplay * 5;
      } else if (screen.width > 700 && screen.width < 990) {
        this.itemDisplay = parseInt(sliderContainer.getAttribute("item-display-t")!, 10);
        this.margin = this.itemDisplay * 6.8;
      } else if (screen.width > 280 && screen.width < 700) {
        this.itemDisplay = parseInt(sliderContainer.getAttribute("item-display-m")!, 10);
        this.margin = this.itemDisplay * 20;
      }

      const items: NodeListOf<HTMLElement> = document.querySelectorAll(".item");

      this.itemleft = items.length % this.itemDisplay;
      this.itemslide = Math.floor(items.length / this.itemDisplay) - 1;

      items.forEach((item) => {
        item.style.width = `${screen.width / this.itemDisplay - this.margin}px`;
      });
    }
  }

  next(): void {
    if (this.slider && this.inc !== this.itemslide + this.itemleft) {
      if (this.inc === this.itemslide) {
        this.inc = this.inc + this.itemleft;
        this.count = this.count - (screen.width / this.itemDisplay) * this.itemleft;
      } else {
        this.inc++;
        this.count = this.count - screen.width;
      }
      this.slider.style.left = `${this.count}px`;
    }
  }

  prev(): void {
    if (this.slider && this.inc !== 0) {
      if (this.inc === this.itemleft) {
        this.inc = this.inc - this.itemleft;
        this.count = this.count + (screen.width / this.itemDisplay) * this.itemleft;
      } else {
        this.inc--;
        this.count = this.count + screen.width;
      }
      this.slider.style.left = `${this.count}px`;
    }
    console.log(this.inc);
  }
}
