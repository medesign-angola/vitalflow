import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-and-inovation',
  imports: [],
  template: `
    <section class="farmo-industrial-complex">
      <div class="limited-container flex flex-col gap-8 lg:gap-12">
        <div class="header flex flex-col gap-4 lg:flex-row justify-between items-stretch">
          <div class="title w-full lg:max-w-150 flex-col gap-4">
            <span class="text-(--secondary) font-bold text-base">Qualidade e Inovação</span>
            <h1 class=" text-4xl lg:text-5xl font-bold leading-[130%] lg:leading-[120%] lg:tracking-[-2%] text-(--primary)">
              Tecnologia e inovação ao serviço de Angola
            </h1>
          </div>
          <div class="content w-full lg:max-w-150 flex flex-col gap-8">
            <h1 class="hidden lg:block"></h1>
            <p class="text-[#111D33] font-medium text-base lg:text-lg leading-[150%]">
              Na Vitalflow, combinamos tecnologia de ponta com rigor científico para produzir medicamentos, soros e gases medicinais que cumprem padrões internacionais, garantindo eficácia, segurança e confiança a cada entrega.
            </p>
          </div>
        </div>
        <div class="section-cover h-80 md:h-auto lg:h-184.5 rounded-2xl overflow-hidden">
          <img src="/images/quality-inovation.jpg" class="w-full h-full object-cover object-center lg:object-top" alt="">
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class QualityAndInovationComponent {

}
