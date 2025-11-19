import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { FarmoIndustrialComplexComponent } from "./components/farmo-industrial-complex/farmo-industrial-complex.component";
import { AnnualProductiveCapacityComponent } from "./components/annual-productive-capacity/annual-productive-capacity.component";
import { LocationComponent } from "./components/location/location.component";
import { QualityAndInovationComponent } from "./components/quality-and-inovation/quality-and-inovation.component";
import { GalleryComponent } from "./components/gallery/gallery.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FarmoIndustrialComplexComponent, AnnualProductiveCapacityComponent, LocationComponent, QualityAndInovationComponent, GalleryComponent],
  template: `
    <div class="hero">
      <app-hero></app-hero>
    </div>

    <div class="farmo-industrial-complex pt-24 pb-12 lg:py-28" id="about-us">
      <app-farmo-industrial-complex></app-farmo-industrial-complex>
    </div>

    <div class="anual-productive-capacity pt-24 pb-12 lg:py-12">
      <app-annual-productive-capacity></app-annual-productive-capacity>
    </div>
    
    <div class="gallery py-12" id="gallery">
      <app-gallery></app-gallery>
    </div>

    <div class="location">
      <app-location></app-location>
    </div>

    <div class="quality-and-inovations pt-24 pb-12 lg:py-12 lg:pb-28!">
      <app-quality-and-inovation></app-quality-and-inovation>
    </div>
  `,
  styles: ``,
})
export class HomePage {

}
