import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, input, OnChanges, output, SimpleChanges, viewChild } from '@angular/core';

@Component({
  selector: 'app-mini-gallery-controllers',
  imports: [ NgClass ],
  template: `
    <div class="controllers-scroller overflow-x-auto mt-8 lg:mt-12" #container>
      <div class="controllers flex justify-start items-center gap-3 w-fit">
        @for (item of itemsArray(); track $index) {
          <div (click)="slideTo($index)" class="tiny-image cursor-pointer w-20 h-20 opacity-60 rounded-xl overflow-hidden"
          [ngClass]="{
            'border-4 border-white opacity-100!': $index === this.activeIndex()
          }"
          >
            <img src="{{ item }}" loading="lazy" class="w-full h-full object-cover object-center" alt="">
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class MiniGalleryControllersComponent implements AfterViewInit, OnChanges {
  slide = output<number>();
  activeIndex = input.required<number>();
  container = viewChild<ElementRef<HTMLElement>>('container');
  itemsArray = input.required<any[]>();

  ngOnChanges(changes: SimpleChanges): void {
      this.containerViewportFollowTheActive();
  }

  ngAfterViewInit(): void {
      this.containerViewportFollowTheActive();
  }

  containerViewportFollowTheActive(): void {
    const scrollerInvolver = this.container()?.nativeElement.children[0] as HTMLElement;
    const activeChild = scrollerInvolver.children[this.activeIndex()] as HTMLElement;

    if(activeChild){
      this.container()?.nativeElement.scrollTo(activeChild.offsetLeft, 0);
    }
  }

  slideTo(index: number): void {
    this.slide.emit(index);
  }
}
