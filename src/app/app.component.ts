import { Component, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

//Import our sayonara service
import { SayonaraPublicService } from './services/sayonara-public/sayonara-public.service';
//Import our route navigator helper
import {  RouteNavigatorService } from './services/route-navigator/route-navigator.service';

//Style URLS will be importes by the styles.scss
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SayonaraPublicService, RouteNavigatorService]
})
export class AppComponent implements OnInit {
  //The Website Title
  siteTitle = '';
  //Array of titles of pages for the nav bar
  navPages = [];

  constructor(
    private sayonaraService: SayonaraPublicService,
    private routeNavigator: RouteNavigatorService
  ) { }

  ngOnInit() {
    //Get a reference to this
    let self = this;
    //Make the request
    this.sayonaraService.getSayonaraSite().subscribe((success: any) => {
      //Got the json!
      console.log("Sayonara Success: ", success);

      //Set the site title
      this.siteTitle = success.siteName;

      this.getNavPages(success);

      //Go to the page in the url
      this.routeNavigator.goToUrlPage();

    }, (error) => {
      this.sayonaraService.toggleSayonaraError();
      console.log("Sayonara error: ", error);
    });
  }

  //Function to close the sidenav
  clickOutsideSideNav(sidenav: any) {
      if(sidenav.opened) sidenav.toggle();
  }

  //Get all the titles of the pages from the site json
  private getNavPages(siteJson) {
      let pagesArray = [];
      siteJson.pages.forEach((page) => {
          if(page.title) pagesArray.push(page);
      });

      this.navPages = this.sayonaraService.sortByOrder(pagesArray);
  }
}
