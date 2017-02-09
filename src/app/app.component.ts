import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

      this.getNavPages(success);

      //Check if we are currently going to a page
      //Get our route params
      self.router.params.subscribe((params) => {
        let currentPageTitle = params['title'];
        self.pageTitle = currentPageTitle;
        let sayonaraPage = self.getSayonaraPage(currentPageTitle, success);
        if(sayonaraPage.content) {
            self.pageContent = sayonaraPage.content;
        }
        else {
            //Go to the first page
            let homePageTitle = success.pages[0].title

            //Navigate to the home page
            this.router.navigate(['/page/' + homePageTitle]);
            this.currentPage = homePageTitle;
        }
      });
    }, (error) => {
      this.sayonaraService.toggleSayonaraError();
      console.log("Sayonara error: ", error);
    });
  }

  //Function to close the sidenav
  clickOutsideSideNav(sidenav: any) {
      if(sidenav.opened) sidenav.toggle();
  }

  //Function to return if the current title refers to the current page
  isCurrentPage(title) {
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

  //Function to go to the default page
  goToDefaultPage() {

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
