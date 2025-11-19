import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, ElementRef, input, TemplateRef, viewChild } from '@angular/core';
import { Scroller } from '@core/abstracts/scroller.abstract.class';
@Component({
  selector: 'q-scroller',
  imports: [NgTemplateOutlet],
  template: `
    <div class="scroller-container overflow-hidden relative" #scrollerElementRef
    [style.paddingLeft.px]="this.paddingX()"
    [style.paddingRight.px]="this.paddingX()"
    >
      @if(!isLoading()){
        <div class="items-container flex justify-start items-stretch"
        [style.gap.px]="this.gap()"
        [style.width]="itemsArray().length > 0 ? 'fit-content' : '100%'"
        >
          @for (item of itemsArray(); track $index) {
            <ng-container *ngTemplateOutlet="itemTemplate(); context: { $implicit: item, $index: $index, onClick: clickContext.scrollTo }"></ng-container>
          } @empty {
            <ng-content select="[onEmpty]">
              <p class="">Sem dados a serem exibidos.</p>
            </ng-content>
          }
        </div>
      } @else {
        <p class="">
          A carregar...
        </p>
      }
    </div>
  `,
  styles: `
    :host *{
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }
  `
})
export class ScrollerComponent extends Scroller {

  gap = input<number>(32);

  itemTemplate = contentChild<TemplateRef<any>>('item');
  scrollerContainer = viewChild<ElementRef<HTMLElement>>('scrollerElementRef');
  isLoading = input.required<boolean>();
  
  get clickContext(){
    return {
      scrollTo: (index: number) => this.scrollToActiveIndex(index)
    }
  }

  protected override bootstrap(): void {
    this.scrollerElementRef = this.scrollerContainer()!;
  }
}
