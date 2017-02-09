import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our services
import { SayonaraPublicService } from '../../services/sayonara-public/sayonara-public.service';
import { RouteNavigatorService } from '../../services/route-navigator/route-navigator.service';
import { LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  //If our page is ready to be displayed
  pageLoaded = false;

  pageTitle = 'Home';
  pageEntries = [];

  //Bind Html
  //http://stackoverflow.com/questions/31548311/angular-2-html-binding
  pageContent = '<h1>Loading Page...</h1>'

  constructor(
    private activatedRoute: ActivatedRoute,
    private sayonaraService: SayonaraPublicService,
    private routeNavigator: RouteNavigatorService
  ) { }

  ngOnInit() {
    //Get the sayonara site
    this.sayonaraService.getSayonaraSite().subscribe((success) => {
      //Success!
      //Then get our route params
      this.activatedRoute.params.subscribe((params) => {
        let currentPageTitle = params['title'];
        this.pageTitle = currentPageTitle;
        let sayonaraPage = this.getSayonaraPage(currentPageTitle, success);
        if(sayonaraPage && sayonaraPage.content) {
            this.pageContent = sayonaraPage.content;
        } else {
            //Go to the default page
            this.routeNavigator.goToDefaultPage();
        }
      });
    }, (error) => {
      //Toggle the error on sayonara
      LoggerService.error('page error!');
      this.sayonaraService.toggleSayonaraError();
    });
  }

  //Function to show a page from the site json
  getSayonaraPage(title: String, siteJson: any): any {
    //Reset our page
    this.pageLoaded = false;
    this.pageEntries = [];

    //Loop through the site Json
    let foundPage = false;
    siteJson.pages.some((page) => {
      if(page.title.toLowerCase() == title.toLowerCase()) {
        //Page found!
        //Return the page
        foundPage = page;
        setTimeout(() => {
            this.pageLoaded = true;
        }, 100)
        return true;
      }
      //Page not found, keep going
      return false;
    });

    //Ensure we found a page
    if(!foundPage) {
      this.routeNavigator.goToDefaultPage();
      return;
    }
    //Get the entries on the page
    this.getSayonaraPageEntries(foundPage);
    //Return the found page
    return foundPage;
  }

  //Function to get all the entries of a page
  getSayonaraPageEntries(page) {
      //Contenate all entries into our page's page entries
      let entries = [];
      if(page.entryTypes.length > 0) {
          page.entryTypes.forEach((entryType) => {
             if(entryType.entries.length > 0) {
                 entries = entries.concat(entryType.entries);
             }
          });
      }

      //Organize the entries
      this.pageEntries = this.sayonaraService.sortByOrder(entries);
  }

}
