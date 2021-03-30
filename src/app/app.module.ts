import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchStyleDirective } from './directives/switch-style.directive';
import { ListOfCardsComponent } from './components/list-of-cards/list-of-cards.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/card/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchStyleDirective,
    ListOfCardsComponent,
    CardComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
