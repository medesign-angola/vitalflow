import { AfterViewInit, Component, ElementRef, HostListener, linkedSignal, OnChanges, OnInit, signal, SimpleChanges, viewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScrollerComponent } from "@shared/components/scroller.component";

@Component({
  selector: 'app-hero',
  imports: [RouterLink, ScrollerComponent],
  template: `
    <section class="hero lg:mt-8 lg:mx-8 lg:h-[59.313rem] relative overflow-hidden">
      <div class="hero-container relative lg:h-full">
        <div class="hero-content-wrapper mt-4 lg:absolute lg:z-11! lg:mt-0 lg:top-[50%] lg:translate-y-[-80%]"
        [style.paddingLeft.px]="this.paddingX()"
        >
          <div class="content flex flex-col gap-4 lg:max-w-223">
            <h1 class="font-[ubuntu]! font-bold text-4xl lg:text-[3.5rem] lg:leading-[120%] lg:tracking-[-2%] text-(--primary) lg:text-white">
              Complexo Farmo-industrial Gases industriais e medicinais, soros e medicamentos em Angola
            </h1>
            <p class="text-[#111D33] lg:text-white font-medium text-base lg:text-lg">
              Aplicamos padrões internacionais, garantindo segurança, disponibilidade e autonomia <br class="hidden lg:block"> no abastecimento nacional e regional.
            </p>
          </div>
        </div>
        <div class="background relative! limited-container lg:absolute! mt-8! mb-12 lg:max-w-full! lg:top-0 lg:mt-0! lg:mb-0 lg:w-full lg:h-full rounded-2xl h-80 overflow-hidden">
          <img src="/images/background.jpg" class="w-full h-full object-center object-cover" alt="">
  
          <div class="overlay hidden lg:block absolute top-0 left-0 w-full h-full z-10"></div>

          <div class="navigation absolute z-20 bottom-3 w-full left-0 h-fit lg:absolute lg:top-14">
            <div class="flex justify-center lg:justify-between items-start w-full">
              <div class="logo hidden lg:block" [style.paddingLeft.px]="paddingX()">
                <img src="/static/logo-white.svg" alt="">
              </div>
              <nav class="w-fit p-2 bg-white lg:bg-white/3! lg:backdrop-blur-[10px] rounded-full h-fit lg:absolute lg:left-[50%] lg:translate-x-[-50%]">
                <ul class="flex gap-2 lg:gap-6 justify-center items-center">
                  <li><a routerLink="" fragment="about-us" class="text-(--primary) lg:text-white text-base font-medium py-1 px-2 rounded-full">Sobre Nós</a></li>
                  <li><a routerLink="" fragment="gallery" class="text-(--primary) lg:text-white text-base py-1 px-2 rounded-full">Galeria</a></li>
                  <li><a routerLink="" fragment="news" class="text-(--primary) lg:text-white text-base py-1 px-2 rounded-full">Notícias</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
  
        <div class="launches flex flex-col gap-4 mt-12 lg:absolute lg:z-11 lg:bottom-10.5 lg:w-full" id="news">
          <div class="title limited-container w-full! relative!" #limitedContainerRef>
            <h1 class=" text-(--primary) lg:text-white font-bold">Nosso lançamento na imprensa</h1>
          </div>
          <div class="cards w-full">
            <q-scroller [itemsArray]="launches()" [isLoading]="false" [alignment]="'left'" [limitedContainerElementRef]="limitedContainer">
              <ng-template #item let-item let-$index="$index" let-scrollTo="onClick">
                <div (click)="scrollTo($index)" class="card lg:backdrop-blur-[30px] cursor-pointer! p-5 bg-(--primary) lg:bg-[#111D331A]/10 w-71 border-[1.5px] border-[#FFFFFF08] backdrop-blur-[30px] rounded-2xl flex flex-col gap-4">
                  <div class="order w-10 h-10 bg-white/10 flex justify-center items-center rounded-full">
                    <span class="text-white font-bold">{{ $index + 1 }}</span>
                  </div>
                  <div class="image w-full h-24 rounded-xl overflow-hidden">
                    <img src="{{ item.image }}" class="w-full h-full object-cover object-top" alt="">
                  </div>
                  <div class="hashtag">
                    <p class="text-white/70 font-medium text-base leading-[-1.5%]">#{{ item.hashtag }}</p>
                  </div>
                  <div class="link lg:hidden">
                    <button class="text-(--secondary) flex gap-2 justify-center items-center font-bold leading-[-1.5%]! text-base">
                      Visualizar
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_104_156)">
                      <path d="M5 12H18.5" stroke="#4FCADB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12.5 5.25L19.25 12L12.5 18.75" stroke="#4FCADB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_104_156">
                      <rect width="24" height="24" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </ng-template>
            </q-scroller>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
  .navigation nav{
    border: 1.5px solid #FFFFFF08;
    box-shadow: 0px 6px 13px 0px #0000004D;
  }
  .overlay{
    background: linear-gradient(185.75deg, rgba(39, 67, 116, 0) -8.91%, rgba(39, 67, 116, 0.689339) 44.95%, #274374 93.83%);
  }
  `,
})
export class HeroComponent implements AfterViewInit {

  limitedContainerRef = viewChild<ElementRef<HTMLElement>>('limitedContainerRef');
  paddingX = linkedSignal(() => this.limitedContainerRef()?.nativeElement.offsetLeft);

  launches = signal([
    {
      image: '/images/eco-sapo.png',
      hashtag: 'Eco Sapo',
      slug: 'eco-sapo'
    },
    {
      image: '/images/lusa.jpg',
      hashtag: 'Lusa',
      slug: 'lusa'
    },
    {
      image: '/images/forbes.jpg',
      hashtag: 'Forbes Africa Lusófona',
      slug: 'forbes'
    },
    {
      image: '/images/ver-angola.jpg',
      hashtag: 'Ver Angola',
      slug: 'ver-angola'
    },
    {
      image: '/images/platineline.jpg',
      hashtag: 'PlatinaLine',
      slug: 'platinaline'
    },
  ]);

  get limitedContainer(): ElementRef<HTMLElement> | undefined {
    return this.limitedContainerRef();
  }

  ngAfterViewInit(): void {
    
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.paddingX.set(this.limitedContainerRef()?.nativeElement.offsetLeft);
  }

}
