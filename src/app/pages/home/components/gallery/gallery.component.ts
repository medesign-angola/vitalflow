import { Component, signal } from '@angular/core';
import { DialogComponent } from "@shared/components/dialog.component";
import { ScrollerComponent } from "@shared/components/scroller.component";
import { GalleryScrollerComponent } from "@shared/components/gallery.component";

@Component({
  selector: 'app-gallery',
  imports: [DialogComponent, ScrollerComponent, GalleryScrollerComponent],
  template: `
    <section class="gallery">
      <div class="limited-container flex flex-col gap-20">
        <div class="title max-w-3xl mx-auto flex flex-col justify-center items-center">
          <span class="text-(--secondary) font-bold text-base">Galeria</span>
          <h1 class="text-center text-4xl lg:text-5xl font-bold leading-[130%] lg:leading-[120%] lg:tracking-[-2%] text-(--primary)">
            Acompanhe o lançamento da 1ª pedra do complexo Vitalflow
          </h1>
          <div class="description mt-6">
            <p class="text-[#111D33] text-center text-base font-mediu lg:text-lg leading-[150%]">
              Estamos felizes em anunciar o lançamento do complexo, que vai transformar a produção e distribuição de produtos farmacêuticos em Angola.
            </p>
          </div>
        </div>

        <div class="photos flex flex-col flex-wrap lg:flex-row items-stretch gap-8">
          <div class="column-1 flex flex-col gap-8 lg:w-[calc(calc(100%/3)-25px)]">
            <div class="img1 w-full rounded-2xl cursor-pointe overflow-hidden relative h-104"><img src="{{ gallery()[0] }}" class="w-full h-full object-cover object-center" alt=""></div>
            <div class="img2 w-full rounded-2xl cursor-pointe overflow-hidden relative h-104"><img src="{{ gallery()[1] }}" class="w-full h-full object-cover object-center" alt=""></div>
          </div>
          <div class="column-2 flex flex-col gap-8 lg:w-[calc(calc(100%/3)-25px)]">
            <div class="img3 w-full rounded-2xl cursor-pointe overflow-hidden relative h-104 lg:h-58.5"><img src="{{ gallery()[2] }}" class="w-full h-full object-cover object-center" alt=""></div>
            <div class="img4 w-full rounded-2xl cursor-pointe overflow-hidden relative h-104 lg:h-149.5"><img src="{{ gallery()[3] }}" class="w-full h-full object-cover object-center" alt=""></div>
          </div>
          <div class="column-3 flex flex-col gap-8 lg:w-[calc(calc(100%/3)-25px)]">
            <div class="img5 w-full rounded-2xl cursor-pointe overflow-hidden relative h-104"><img src="{{ gallery()[4] }}" class="w-full h-full object-cover object-center" alt=""></div>
            <div class="img6 w-full rounded-2xl cursor-pointe overflow-hidden relative h-104"><img src="{{ gallery()[5] }}" class="w-full h-full object-cover object-center" alt=""></div>
          </div>
        </div>

        <div class="buttons flex flex-col md:flex-row md:justify-center gap-4">
          <button (click)="openModalForImage(0)" class="py-2.5 cursor-pointer px-5 rounded-full text-white bg-(--primary) font-bold flex gap-3 justify-center items-center">
            Ver todas as fotos
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_225_330)">
            <path d="M5 12H18.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 5.25L19.25 12L12.5 18.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_225_330">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </button>
          <button (click)="this.openVideo.set(true)" class="py-2.5 cursor-pointer px-5 rounded-full bg-white text-(--primary) border-2 border-(--primary) font-bold flex gap-3 justify-center items-center">
            Assista o vídeo do lançamento
          </button>
        </div>
      </div>
    </section>

    @if(this.clickedImage() !== null){
    <ducki-dialog [openTrigger]="this.openDialog()" (closed)="this.openDialog.set(false)" [panelColor]="'transparent'" [closeOnOutsideClick]="true">
      <ng-template #panel let-close="close">
        <div class="dialog-panel w-89.5 lg:w-272 h-[calc(100vh-200px)]">
          <app-gallery-scroller [itemsArray]="gallery()" [alignment]="'center'" [activeIndex]="clickedImage()!" ></app-gallery-scroller>
        </div>
      </ng-template>

      <ng-template #closer let-close="close">
        <div class="dialog-closer flex justify-end items-center">
          <button class="cursor-pointer" (click)="close()">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.1"/>
            <g clip-path="url(#clip0_104_520)">
            <path d="M34.75 21.25L21.25 34.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34.75 34.75L21.25 21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_104_520">
            <rect width="24" height="24" fill="white" transform="translate(16 16)"/>
            </clipPath>
            </defs>
            </svg>
          </button>
        </div>
      </ng-template>
    </ducki-dialog>
    }

    <ducki-dialog [openTrigger]="this.openVideo()" [top]="50" [translate]="'translateY(-50%) !important'" (closed)="this.openVideo.set(false)" [panelColor]="'transparent'" [closeOnOutsideClick]="true">
      <ng-template #panel let-close="close">
        <div class="dialog-panel w-89.5 lg:w-272 h-80">
          <video src="{{ video() }}" controls autoplay loop class="h-full rounded-2xl overflow-hidden"></video>
        </div>
      </ng-template>

      <ng-template #closer let-close="close">
        <div class="dialog-closer flex justify-end items-center">
          <button class="cursor-pointer" (click)="close()">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.1"/>
            <g clip-path="url(#clip0_104_520)">
            <path d="M34.75 21.25L21.25 34.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34.75 34.75L21.25 21.25" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_104_520">
            <rect width="24" height="24" fill="white" transform="translate(16 16)"/>
            </clipPath>
            </defs>
            </svg>
          </button>
        </div>
      </ng-template>
    </ducki-dialog>

  `,
  styles: ``,
})
export class GalleryComponent {
  openDialog = signal(false);
  openVideo = signal(false);
  clickedImage = signal<number | null>(null);

  gallery = signal([
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/gallery-9.jpg',
    '/images/gallery-10.jpg',
    '/images/gallery-11.jpg',
    '/images/gallery-12.jpg',
    '/images/gallery-13.jpg',
    '/images/gallery-14.jpg',
    '/images/gallery-15.jpg',
    '/images/gallery-16.jpg',
  ]);

  video = signal('/videos/intro.mp4');

  openModalForImage(imageIndex: number) {
    this.clickedImage.set(imageIndex);
    this.openDialog.set(true);
  }
}
