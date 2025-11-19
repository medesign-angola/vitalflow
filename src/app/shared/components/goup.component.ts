import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, inject, input, linkedSignal, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-goup',
  imports: [],
  template: `
    <div class="goup fixed hidden lg:block z-50 lg:bottom-44"
    [style.right.px]="position()"
    >
      @if(!isAtTop()){
        <button (click)="goup()" class="cursor-pointer">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <foreignObject x="-30" y="-30" width="116" height="116"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(15px);clip-path:url(#bgblur_0_255_253_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="30">
          <rect width="56" height="56" rx="28" fill="#274374" fill-opacity="0.3"/>
          <rect x="0.75" y="0.75" width="54.5" height="54.5" rx="27.25" stroke="white" stroke-opacity="0.03" stroke-width="1.5"/>
          <g clip-path="url(#clip1_255_253)">
          <path d="M28 35V21.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.25 27.5L28 20.75L34.75 27.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </g>
          <defs>
          <clipPath id="bgblur_0_255_253_clip_path" transform="translate(30 30)"><rect width="56" height="56" rx="28"/>
          </clipPath><clipPath id="clip1_255_253">
          <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 16 40)"/>
          </clipPath>
          </defs>
          </svg>
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class GoupComponent implements AfterViewInit {
  platformId = inject(PLATFORM_ID);
  isAtTop = signal(true);

  limitedContainerElementRef = input<ElementRef<HTMLElement> | undefined>();
  increment = input<number>(0);
  position = linkedSignal(() => (this.limitedContainerElementRef()?.nativeElement.offsetLeft ?? 0) + this.increment() );

  ngAfterViewInit(): void {
      
  }

  goup(): void{
    if(!isPlatformBrowser(this.platformId)) return;
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: Event): void {
    this.checkScrollPosition();
  }

  @HostListener('window:resize', ['$event']) onResize(event: any){
    this.valueToPadding();
  }

  protected valueToPadding(){
    this.position.set(((this.limitedContainerElementRef()?.nativeElement.offsetLeft) ?? 0) + this.increment());
  }

  private checkScrollPosition(): void {
    // window.scrollY retorna o número de pixels que o documento rolou verticalmente.
    // Em navegadores mais antigos ou para compatibilidade total, pode-se usar document.documentElement.scrollTop
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    // Defina um pequeno threshold (limiar), por exemplo, 10 pixels, para considerar que a tela saiu do topo.
    const scrollThreshold = 10;

    this.isAtTop.set(scrollPosition < scrollThreshold);

    // Opcional: log para debug
    // console.log('Posição do Scroll:', scrollPosition, 'Está no topo?', this.isAtTop);
  }
}
