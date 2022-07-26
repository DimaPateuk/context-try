import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContextProviderComponent, ContextProviderDirective } from './context-provider/context-provider.component';
import { ContextConsumerComponent } from './context-consumer/context-consumer.component';
import { OtherComponent } from './other/other.component';
import { OtherWithComponent } from './other-with/other-with.component';
import { OtherWithConsumerComponent } from './other-with-consumer/other-with-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextProviderComponent,
    ContextConsumerComponent,
    OtherComponent,
    OtherWithComponent,
    OtherWithConsumerComponent,
    ContextProviderDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
