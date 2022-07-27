import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './service-test/child-component/child.component';
import {
  ContextProvider
} from './service-test/context-provider/context-provider.component';
import {
  ParentComponentProjection
} from './service-test/parent-component-projection/parent.component';
import {
  ParentComponent
} from './service-test/parent-component/parent.component';

// import {
//   ContextProviderComponent,
//   ContextProviderDirective
// } from './context-provider/context-provider.component';
@NgModule({
  declarations: [
    AppComponent,
    // ContextProviderComponent,
    // ContextConsumerComponent,
    // OtherComponent,
    // OtherWithComponent,
    // OtherWithConsumerComponent,
    // ContextProviderDirective,
    ParentComponent,
    ParentComponentProjection,
    ChildComponent,
    ContextProvider,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
