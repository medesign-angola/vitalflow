import { AfterViewInit, Component, ElementRef, linkedSignal, signal, viewChild } from '@angular/core';
import { RouterLinkActive, RouterLink } from "@angular/router";
import { GoupComponent } from "@shared/components/goup.component";

@Component({
  selector: 'app-footer',
  imports: [RouterLink, GoupComponent],
  template: `
    <section class="footer relative! mb-4! lg:mb-8! limited-container overflow-hidden" #limitedContainerRef>
      <div class="footer-container relative h-full">
        <div class="footer-content-wrapper relative z-11!">
          <div class="content p-4 md:p-12 flex flex-col gap-20 xl:gap-36 w-full">
            <div class="top-section flex flex-col gap-8 xl:flex-row xl:justify-between">
              <div class="brand flex gap-8 justify-start items-end">
                <a [routerLink]="['/']">
                  <img src="/static/brand-white.svg" alt="">
                </a>

                <div class="contact hidden lg:flex flex-col gap-1">
                  <h3 class="text-2xl text-white font-bold mb-1">Contacto</h3>
                  <div class="chips flex gap-2 justify-start items-center">
                    <span class="py-2 px-4 rounded-full bg-white text-(--primary) font-bold flex gap-2 justify-center items-center">
                      {{ phone() }}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_166_27)">
                      <path d="M10.5 10.5H13.5V2.5H5.5V5.5" stroke="#274374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.5 5.5H2.5V13.5H10.5V5.5Z" stroke="#274374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_166_27">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </span>
                    <span class="py-2 px-4 rounded-full bg-white text-(--primary) font-bold flex gap-2 justify-center items-center">
                      {{ email() }}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_166_27)">
                      <path d="M10.5 10.5H13.5V2.5H5.5V5.5" stroke="#274374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.5 5.5H2.5V13.5H10.5V5.5Z" stroke="#274374" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_166_27">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="description lg:hidden">
                <h3 class="text-lg text-white font-bold mb-1">
                  Localização Estratégica
                </h3>
                <p class="text-base text-white font-medium">
                  A Vitalflow Projectos está na Zona Económica Especial de Luanda, perto do novo Aeroporto Internacional Dr. António Agostinho Neto, garantindo boa acessibilidade.
                </p>
                <div class="contacts mt-6">
                  <h3 class="text-lg text-white font-bold mb-1">Contacto</h3>
                  <p class="font-medium text-base text-white underline">{{ phone() }}</p>
                  <p class="font-medium text-base text-white underline">{{ email() }}</p>
                </div>
              </div>
              <div class="socialmedias flex gap-3 justify-start items-center">
                <a class="linkedin cursor-pointer" href="{{ linkedin() }}" target="_blank">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject x="0" y="0" width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(15px);clip-path:url(#bgblur_0_255_165_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="30">
                  <rect width="56" height="56" rx="28" fill="white"/>
                  <rect x="0.75" y="0.75" width="54.5" height="54.5" rx="27.25" stroke="white" stroke-opacity="0.03" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 19.7432C19.6716 19.7432 19 20.4147 19 21.2432V36.2432C19 37.0716 19.6716 37.7432 20.5 37.7432H35.5C36.3284 37.7432 37 37.0716 37 36.2432V21.2432C37 20.4147 36.3284 19.7432 35.5 19.7432H20.5ZM24.5208 23.7459C24.5264 24.7021 23.8106 25.2914 22.9612 25.2871C22.1611 25.2829 21.4636 24.6459 21.4678 23.7473C21.472 22.9021 22.14 22.2229 23.0076 22.2426C23.8879 22.2623 24.5264 22.9078 24.5208 23.7459ZM28.2797 26.5049H25.7597H25.7583V35.0648H28.4217V34.8651C28.4217 34.4852 28.4214 34.1052 28.4211 33.7251C28.4203 32.7113 28.4194 31.6964 28.4246 30.6829C28.426 30.4368 28.4372 30.1809 28.5005 29.946C28.7381 29.0685 29.5271 28.5018 30.4074 28.6411C30.9727 28.7296 31.3467 29.0573 31.5042 29.5903C31.6013 29.9235 31.6449 30.2821 31.6491 30.6295C31.6605 31.6771 31.6589 32.7247 31.6573 33.7724C31.6567 34.1422 31.6561 34.5122 31.6561 34.882V35.0634H34.328V34.8581C34.328 34.4061 34.3278 33.9542 34.3275 33.5023C34.327 32.3728 34.3264 31.2433 34.3294 30.1134C34.3308 29.6029 34.276 29.0995 34.1508 28.6059C33.9638 27.8718 33.5771 27.2643 32.9485 26.8256C32.5027 26.5134 32.0133 26.3123 31.4663 26.2898C31.404 26.2872 31.3412 26.2838 31.2781 26.2804C30.9984 26.2653 30.7141 26.2499 30.4467 26.3038C29.6817 26.4571 29.0096 26.8073 28.5019 27.4246C28.4429 27.4954 28.3852 27.5673 28.2991 27.6746L28.2797 27.6989V26.5049ZM21.6816 35.0676H24.3324V26.5105H21.6816V35.0676Z" fill="#274374"/>
                  </g>
                  <defs>
                  <clipPath id="bgblur_0_255_165_clip_path" transform="translate(0 0)"><rect width="56" height="56" rx="28"/>
                  </clipPath></defs>
                  </svg>
                </a>
                <a class="instagram cursor-pointer" href="{{ instagram() }}" target="_blank">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject x="0" y="0" width="0" height="0"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(15px);clip-path:url(#bgblur_0_255_167_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="30">
                  <rect width="56" height="56" rx="28" fill="white"/>
                  <rect x="0.75" y="0.75" width="54.5" height="54.5" rx="27.25" stroke="white" stroke-opacity="0.03" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 19.7432H24C21.2386 19.7432 19 21.9817 19 24.7432V32.7432C19 35.5046 21.2386 37.7432 24 37.7432H32C34.7614 37.7432 37 35.5046 37 32.7432V24.7432C37 21.9817 34.7614 19.7432 32 19.7432ZM35.25 32.7432C35.2445 34.5358 33.7926 35.9877 32 35.9932H24C22.2074 35.9877 20.7555 34.5358 20.75 32.7432V24.7432C20.7555 22.9505 22.2074 21.4987 24 21.4932H32C33.7926 21.4987 35.2445 22.9505 35.25 24.7432V32.7432ZM32.75 24.9932C33.3023 24.9932 33.75 24.5454 33.75 23.9932C33.75 23.4409 33.3023 22.9932 32.75 22.9932C32.1977 22.9932 31.75 23.4409 31.75 23.9932C31.75 24.5454 32.1977 24.9932 32.75 24.9932ZM28 24.2432C25.5147 24.2432 23.5 26.2579 23.5 28.7432C23.5 31.2285 25.5147 33.2432 28 33.2432C30.4853 33.2432 32.5 31.2285 32.5 28.7432C32.5027 27.5489 32.0294 26.4027 31.1849 25.5582C30.3404 24.7138 29.1943 24.2405 28 24.2432ZM25.25 28.7432C25.25 30.262 26.4812 31.4932 28 31.4932C29.5188 31.4932 30.75 30.262 30.75 28.7432C30.75 27.2244 29.5188 25.9932 28 25.9932C26.4812 25.9932 25.25 27.2244 25.25 28.7432Z" fill="#274374"/>
                  </g>
                  <defs>
                  <clipPath id="bgblur_0_255_167_clip_path" transform="translate(0 0)"><rect width="56" height="56" rx="28"/>
                  </clipPath></defs>
                  </svg>
                </a>
              </div>
            </div>
            <div class="bottom-section flex flex-col gap-12">
              <img src="/static/footer.svg" alt="">

              <div class="rights pt-8 flex justify-between flex-wrap gap-4 relative w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-white/20 before:rounded-full">
                <p class="text-base text-white">&copy; 2025 Vitalflow. Todos os direitos reservados.</p>
                <a [routerLink]="['/terms']" class="text-base text-white underline">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
        <div class="background absolute max-w-full! top-0 mt-0! mb-0 w-full h-full rounded-2xl z-10 overflow-hidden">
          <img src="/images/footer.png" class="w-full h-full object-center object-cover" alt="">
          <div class="overlay absolute top-0 left-0 w-full h-full z-10"></div>
        </div>
      </div>

      <app-goup [limitedContainerElementRef]="limitedContainer" [increment]="48"></app-goup>
    </section>
  `,
  styles: `
  .overlay{
    background: linear-gradient(185.75deg, rgba(39, 67, 116, 0) -8.91%, rgba(39, 67, 116, 0.689339) 44.95%, #274374 93.83%);
  }
  `,
})
export class FooterComponent implements AfterViewInit {

  limitedContainerRef = viewChild<ElementRef<HTMLElement>>('limitedContainerRef');
  position = linkedSignal(() => this.limitedContainerRef()?.nativeElement.offsetLeft);

  ngAfterViewInit(): void {
    
  }
  
  get limitedContainer(): ElementRef<HTMLElement> | undefined {
    return this.limitedContainerRef();
  }

  phone = signal('+244 927 709 592');
  email = signal('vitalflow@vitalflow.ao');
  linkedin = signal('');
  instagram = signal('');
}
