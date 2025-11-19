import { Component, ElementRef, viewChild } from '@angular/core';
import { Scroller } from '@core/abstracts/scroller.abstract.class';
import { NgClass } from '@angular/common';
import { MiniGalleryControllersComponent } from "./mini-gallery-controllers.component";

@Component({
  selector: 'app-gallery-scroller',
  imports: [NgClass, MiniGalleryControllersComponent],
  template: `
    <div class="scroller">

      <div class="prev w-fit h-14 absolute -left-26 z-10 top-[50%] translate-y-[-50%]">
         <button (click)="prev()" class="cursor-pointer">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <foreignObject x="0" y="0" width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(15px);clip-path:url(#bgblur_0_94_1339_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="30">
          <rect width="56" height="56" rx="28" fill="white"/>
          <rect x="0.75" y="0.75" width="54.5" height="54.5" rx="27.25" stroke="white" stroke-opacity="0.03" stroke-width="1.5"/>
          <g clip-path="url(#clip1_94_1339)">
          <path d="M35 28H21.5" stroke="#274374" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.5 21.25L20.75 28L27.5 34.75" stroke="#274374" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </g>
          <defs>
          <clipPath id="bgblur_0_94_1339_clip_path" transform="translate(0 0)"><rect width="56" height="56" rx="28"/>
          </clipPath><clipPath id="clip1_94_1339">
          <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 40 16)"/>
          </clipPath>
          </defs>
          </svg>
         </button>
      </div>

      <div class="next w-fit h-14 absolute -right-26 z-10 top-[50%] translate-y-[-50%]">
         <button (click)="next()" class="cursor-pointer">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <foreignObject x="0" y="0" width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(15px);clip-path:url(#bgblur_0_94_1335_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="30">
          <rect width="56" height="56" rx="28" fill="white"/>
          <rect x="0.75" y="0.75" width="54.5" height="54.5" rx="27.25" stroke="white" stroke-opacity="0.03" stroke-width="1.5"/>
          <g clip-path="url(#clip1_94_1335)">
          <path d="M21 28H34.5" stroke="#274374" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28.5 21.25L35.25 28L28.5 34.75" stroke="#274374" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </g>
          <defs>
          <clipPath id="bgblur_0_94_1335_clip_path" transform="translate(0 0)"><rect width="56" height="56" rx="28"/>
          </clipPath><clipPath id="clip1_94_1335">
          <rect width="24" height="24" fill="white" transform="translate(16 16)"/>
          </clipPath>
          </defs>
          </svg>
         </button>
      </div>

      <div class="scroller-container overflow-hidden relative" #scrollerElementRef
      [style.paddingLeft.px]="this.paddingX()"
      [style.paddingRight.px]="this.paddingX()"
      >
        <div class="items-container flex justify-start items-stretch"
        [style.width]="itemsArray().length > 0 ? 'fit-content' : '100%'"
        >
          @for (item of itemsArray(); track $index) {
            <div class="image w-89.5 lg:w-272 h-[calc(100vh-200px)] rounded-2xl overflow-hidden">
              <img src="{{ item }}" class="w-full h-full object-contain object-center" alt="">
            </div>
          } @empty {
            <ng-content select="[onEmpty]">
              <p class="">Sem dados a serem exibidos.</p>
            </ng-content>
          }
        </div>
      </div>
    </div>

    <div class="mini-gallery-controllers">
      <app-mini-gallery-controllers [itemsArray]="this.itemsArray()" [activeIndex]="this.activeIndex()" (slide)="this.slideTo($event)"></app-mini-gallery-controllers>
    </div>
  `,
  styles: ``,
})
export class GalleryScrollerComponent extends Scroller {

  scrollerContainer = viewChild<ElementRef<HTMLElement>>('scrollerElementRef');
  
  protected override bootstrap(): void {
    this.scrollerElementRef = this.scrollerContainer()!;
  }
}
