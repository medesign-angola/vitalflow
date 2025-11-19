import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  template: `
    <div class="header hidden lg:block py-6">
      <div class="menu bottom-3 w-full left-0 h-fit">
        <div class="limited-container flex justify-between items-start w-full">
          <div class="logo">
            <a [routerLink]="['/']">
              <img src="/static/logo-secondary.svg" alt="">
            </a>
          </div>
          <nav class="w-fit p-2 bg-[#111D331A] backdrop-blur-[10px] rounded-full h-fit absolute left-[50%] translate-x-[-50%]">
            <ul class="flex gap-2 lg:gap-6 justify-center items-center">
              <li><a routerLink="" fragment="about-us" class="text-(--primary) text-base font-medium py-1 px-2 rounded-full">Sobre Nós</a></li>
              <li><a routerLink="" fragment="gallery" class="text-(--primary) text-base py-1 px-2 rounded-full">Galeria</a></li>
              <li><a routerLink="" fragment="news" class="text-(--primary) text-base py-1 px-2 rounded-full">Notícias</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="terms-content-wrapper py-12 flex flex-col">
      <div class="limited-container w-full flex flex-col lg:flex-row gap-6">
        <div class="navigation h-fit sticky top-5 hidden mt-3 w-[20rem] lg:block">
          <h3 class="text-2xl text-black font-bold py-3 px-4">Conteúdos</h3>

          <div class="navigation flex flex-col gap-2">
            <a [routerLink]="['/terms']" fragment="site-changes" class="py-3 px-4 rounded-full text-black flex gap-2 justify-start items-center text-nowrap">
              Alterações ao site
            </a>
            <a [routerLink]="['/terms']" fragment="propriety" class="py-3 px-4 rounded-full text-black flex gap-2 justify-start items-center text-nowrap">
              Propriedade intelectual
            </a>
            <a [routerLink]="['/terms']" fragment="data" class="py-3 px-4 rounded-full text-black flex gap-2 justify-start items-center text-nowrap">
              Dados pessoais
            </a>
            <a [routerLink]="['/terms']" fragment="cookies" class="py-3 px-4 rounded-full text-black flex gap-2 justify-start items-center text-nowrap">
              Cookies
            </a>
          </div>
        </div>
        <div class="wrapper lg:max-w-3xl">
          <div class="header pt-4 pb-9">
            <h1 class="uppercase text-black font-bold text-2xl lg:text-[2.5rem]">Termos de utilização</h1>

            <div class="navigation mt-6 flex lg:hidden flex-col gap-1">
              <h3 class="text-base text-black font-bold py-3">Conteúdos</h3>
              <div class="chips-scroller w-full overflow-x-auto">
                <div class="chips flex gap-2 justify-start items-center w-fit">
                  <a [routerLink]="['/terms']" fragment="site-changes" class="py-2 px-4 rounded-full text-black flex gap-2 justify-center items-center text-nowrap">
                    Alterações ao site
                  </a>
                  <a [routerLink]="['/terms']" fragment="propriety" class="py-2 px-4 rounded-full bg-white text-black flex gap-2 justify-center items-center text-nowrap">
                    Propriedade intelectual
                  </a>
                  <a [routerLink]="['/terms']" fragment="data" class="py-2 px-4 rounded-full bg-white text-black flex gap-2 justify-center items-center text-nowrap">
                    Dados pessoais
                  </a>
                  <a [routerLink]="['/terms']" fragment="cookies" class="py-2 px-4 rounded-full bg-white text-black flex gap-2 justify-center items-center text-nowrap">
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="content">
            <p class="font-bold text-lg">A utilização deste website determina a aceitação dos presentes Termos de Utilização.</p>
            <p class="mt-4">A palavra “Utilizador” refere-se a qualquer pessoa que aceda ou utilize este website. </p>

            <div class="block-content mt-6" id="site-changes">
              <h4 class="subject underline font-bold text-lg lg:text-2xl text-(--primary)">Alterações ao site</h4>
              <p class="mt-4">
                A Vitalflow pode, em qualquer momento, sem necessidade de pré-aviso e com efeitos imediatos a modificar qualquer parte ou estrutura do website, bem como poderá adicionar, atualizar ou eliminar a informação contida no mesmo.
              </p>
            </div>

            <div class="block-content mt-6" id="propriety">
              <h4 class="subject underline font-bold text-lg lg:text-2xl text-(--primary)">Propriedade intelectual</h4>
              <p class="mt-4">
                Todos os direitos de autor e de propriedade intelectual referentes a todas as imagens, textos e outros materiais presentes neste website são propriedade da VITALFLOW ou incluídos com a autorização do autor.
              </p>
              <p class="mt-4">
                O logótipo, marcas, sinais distintivos e marcas de serviço presentes neste website pertencem à Vitalflow. É expressamente proibido a utilização de marcas e nomes de produtos apresentados neste website, ou de outro conteúdo disponibilizado.
              </p>
              <p class="mt-4">
                O utilizador tem autorização para navegar por este website. Nenhuma reprodução de alguma das partes deste website pode ser vendida ou distribuída com fins comerciais.
              </p>
            </div>

            <div class="block-content mt-6" id="data">
              <h4 class="subject underline font-bold text-lg lg:text-2xl text-(--primary)">Dados pessoais</h4>
              <p class="mt-4">
                Este website não faz recolha de dados pessoais que permitem a identificação de pessoas individuais. Não obstante a Vitalflow procura adotar as medidas técnicas e organizacionais adequadas a salvaguardar a segurança de qualquer informação captada durante a navegação do website e assegurar a integridade dos dados de tráfego eletrónico referentes à utilização, bem como evitar a destruição ou perda de dados.
              </p>
            </div>

            <div class="block-content mt-6" id="cookies">
              <h4 class="subject underline font-bold text-lg lg:text-2xl text-(--primary)">Cookies</h4>
              <p class="mt-4">
                O website Vitalflow pode utilizar cookies. Os cookies são pequenos ficheiros de texto gerados pelas páginas web que visita, que podem vir a ser úteis no website posteriormente. Os dados recolhidos permitem que o nosso website mantenha as suas informações entre as páginas e permite analisar a maneira como os utilizadores interagem com o mesmo. Os cookies apenas podem armazenar texto, normalmente é sempre anónimo e encriptado. Não são armazenadas informações pessoais e nem podem ser associados a uma pessoa identificada ou identificável. Em resumo, este website pode memorizar as informações sobre a sua visita, o que permitirá facilitar a sua próxima visita e tornar o website mais útil e acessível. 
              </p>
              <p class="mt-4">
                Ao aceder e navegar neste website, implica que o utilizador consente a utilização de cookies.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class TermsPage {

}
