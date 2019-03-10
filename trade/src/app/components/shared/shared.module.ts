import { InputComponent } from './input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ InputComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent, HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
