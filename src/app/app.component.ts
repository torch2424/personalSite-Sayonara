import { Component, OnInit } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

//Import Our Services
import { SayonaraPublicService } from './services/sayonara-public/sayonara-public.service';
import { RouteNavigatorService } from './services/route-navigator/route-navigator.service';
import { LoggerService } from './services/logger/logger.service';

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
      LoggerService.debug("Sayonara API Success Response: ", success);

      //Set the site title
      this.siteTitle = success.siteName;

      this.getNavPages(success);

      //Page component will handle loading the default page

    }, (error) => {
      this.sayonaraService.toggleSayonaraError();
      LoggerService.error("Sayonara API error: ", error);
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
