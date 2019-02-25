import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { FunctionsPipesComponent } from './functions-pipes/functions-pipes.component';
import { ContainerComponent } from './container/container.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SharedModule } from '@nx-demo/shared';

const routes: Route[] = [
  {
    path: 'pipes',
    component: FunctionsPipesComponent
  },
  {
    path: 'container',
    component: ContainerComponent
  }
];

@NgModule({
  declarations: [AppComponent, FunctionsPipesComponent, ContainerComponent, PresentationComponent],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
