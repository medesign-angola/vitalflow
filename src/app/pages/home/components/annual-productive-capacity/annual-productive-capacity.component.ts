import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-productive-capacity',
  imports: [],
  template: `
    <section class="annual-productive-capcity bg-(--secondary) py-12 lg:py-20">
      <div class="limited-container flex gap-8 flex-col xl-1230:flex-row xl-1230:justify-between xl-1230:items-center">
        <div class="content lg:max-w-150">
          <h1 class="text-white font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] mb-4">
            Capacidade<br class="hidden lg:block"> Produtiva Anual
          </h1>
          <p class="text-white font-medium lg:text-lg">
            A capacidade instalada posiciona a Vitalflow como referência no sector farmacêutico angolano:
          </p>
          <div class="statistics-container mt-8">
            <div class="statistics flex justify-start items-start gap-6 py-2">
              <div class="data w-[10.438rem] md:w-2xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--primary)">1,7 <br class="md:hidden"> bilhões</h1>
                <p class="text-white font-medium text-base leading-[150%] tracking-[-1.5%]"> Comprimidos/cápsulas</p>
              </div>
              <div class="data w-[10.438rem] md:w-2xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--primary)">50 <br class="md:hidden"> milhões</h1>
                <p class="text-white font-medium text-base leading-[150%] tracking-[-1.5%]"> Frascos injetáveis</p>
              </div>
            </div>

            <div class="statistics flex justify-start items-start gap-6 py-2 lg:py-4">
              <div class="data w-[10.438rem] md:w-2xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--primary)">35 <br class="md:hidden">milhões</h1>
                <p class="text-white font-medium text-base leading-[150%] tracking-[-1.5%]"> Sacos de soro</p>
              </div>
              <div class="data w-[10.438rem] md:w-xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--primary)">13 mil <br class="md:hidden">kg/dia</h1>
                <p class="text-white font-medium text-base leading-[150%] tracking-[-1.5%]"> Frascos injetáveis</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-cover relative h-80 md:h-auto lg:h-160 rounded-2xl xl-1230:max-w-150 overflow-hidden">
          <img src="/images/annual-productive.jpg" class="w-full h-full object-cover object-center" alt="">
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class AnnualProductiveCapacityComponent {

}
