import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: `test/:id`,
        loadChildren: () =>
          import('./test-component/test.module').then((m) => m.TestModule),
      },
    ]),
  ],
  declarations: [AppComponent, WelcomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
