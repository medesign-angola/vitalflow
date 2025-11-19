import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="flex justify-start items-center py-4 lg:hidden">
      <div class="brand limited-container w-full!">
        <a [routerLink]="['/']">
          <img src="/static/brand.svg" alt="">
        </a>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {

}
