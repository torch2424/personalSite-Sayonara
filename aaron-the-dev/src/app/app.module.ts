import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

//Material Design
//https://github.com/jelbourn/material2-app
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

//Declare our routes
//https://angular.io/docs/ts/latest/guide/router.html
const appRoutes: Routes = [
  { path: 'page/:title', component: PageComponent },
];
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
