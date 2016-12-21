import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';

//Import our sayonara service
import { SayonaraPublicService } from './services/sayonara-public.service';

//Style URLS will be importes by the styles.scss
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SayonaraPublicService]
})
export class AppComponent implements OnInit {
  //The Website Title
  siteTitle = '';

  //Array of titles of pages for the nav bar
  navPages = [];

  //Our current page
  currentPage = '';

  //The title attribute of the sayonara site that leads home
  private homePageTitleKey = 'Home';

  constructor(
    private router: Router,
    private sayonaraService: SayonaraPublicService
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

      //TODO: Set the nav bar
      this.getNavPages(success);

      //Navigate to the home page
      this.router.navigate(['/page/' + self.homePageTitleKey]);
      this.currentPage = self.homePageTitleKey;
    }, (error) => {
      //TODO: handle the error
      console.log("Sayonara error: ", error);
    });
  }

  //Function to close the sidenav
  clickOutsideSideNav(sidenav: any) {
      if(sidenav.opened) sidenav.toggle();
  }

  //Function to return if the current title refers to the current page
  isCurrentPage(title) {
      console.log('hi');
      return title == this.currentPage;
  }

  //Funciton to go to a page from the sidenav
  goToPage(title, sidenav) {
      //Go to the route
      this.router.navigate(['/page/' + title]);
      this.currentPage = title;
      //Toggle the sidenav
      if(sidenav) sidenav.toggle();
  }

  //Get all the titles of the pages from the site json
  private getNavPages(siteJson) {
      let self = this;
      siteJson.pages.forEach((page) => {
          if(page.title) self.navPages.push(page.title);
      });
  }
}
