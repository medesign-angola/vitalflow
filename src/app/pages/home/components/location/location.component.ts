import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  imports: [],
  template: `
    <section class="annual-productive-capcity bg-white py-12 lg:py-20">
      <div class="limited-container flex gap-8 flex-col xl-1230:flex-row xl-1230:justify-between xl-1230:items-center">
        <div class="content lg:max-w-150">
          <span class="text-(--secondary) font-bold text-base">Instalações ZEE</span>
          <h1 class="text-(--primary) font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] my-4">
            Instalações amplas para atender um mercado em crescimento
          </h1>
          <p class="text-[##111D33] font-medium lg:text-lg">
            A Vitalflow possui áreas para a produção de medicamentos e gases medicinais, além de espaços verdes, promovendo eficiência no setor farmacêutico de Angola.
          </p>
          <div class="statistics-container mt-8">
            <div class="statistics flex justify-start items-start gap-6 py-2">
              <div class="data w-[10.438rem] md:w-2xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--secondary)">12.100 m²</h1>
                <p class="text-[#111D33] font-medium text-base leading-[150%] tracking-[-1.5%]"> Edifício de Medicamentos</p>
              </div>
              <div class="data w-[10.438rem] md:w-2xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--secondary)">5.000 m²</h1>
                <p class="text-[#111D33] font-medium text-base leading-[150%] tracking-[-1.5%]"> Fábrica de Gases</p>
              </div>
            </div>

            <div class="statistics flex justify-start items-start gap-6 py-2 lg:py-4">
              <div class="data w-[10.438rem] md:w-2xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--secondary)">4.500 m²</h1>
                <p class="text-[#111D33] font-medium text-base leading-[150%] tracking-[-1.5%]"> Área de Jardins</p>
              </div>
              <div class="data w-[10.438rem] md:w-xs flex flex-col gap-2">
                <h1 class="font-bold text-4xl leading-[130%] lg:text-5xl lg:leading-[120%] lg:tracking-[-2%] text-(--secondary)">14.220 m²</h1>
                <p class="text-[#111D33] font-medium text-base leading-[150%] tracking-[-1.5%]"> Área Pavimentada</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-cover relative h-80 md:h-auto lg:h-160 rounded-2xl xl-1230:max-w-150 overflow-hidden">
          <img src="/images/location.png" class="w-full h-full object-cover object-center" alt="">
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class LocationComponent {

}
