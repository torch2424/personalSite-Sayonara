import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our sayonara service
import { SayonaraPublicService } from '../../services/sayonara-public.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  //If our page is ready to be displayed
  pageLoaded = false;

  pageTitle = 'Home';
  pageEntries = [];

  //In the case of the page not being passed, the default title to look for
  private defaultPage = 'Home';

  //Bind Html
  //http://stackoverflow.com/questions/31548311/angular-2-html-binding
  pageContent = '<h1>Loading Page...</h1>'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sayonaraService: SayonaraPublicService
  ) { }

  ngOnInit() {
    //Get a reference to this
    let self = this;
    //Get the sayonara site
    this.sayonaraService.getSayonaraSite().subscribe((success) => {
      //Success!
      //Then get our route params
      self.route.params.subscribe((params) => {
        let currentPageTitle = params['title'];
        self.pageTitle = currentPageTitle;
        let sayonaraPage = self.getSayonaraPage(currentPageTitle, success);
        if(sayonaraPage.content) {
            self.pageContent = sayonaraPage.content;
        }
        else {
            //Go to the default page
            this.router.navigate(['/page/' + this.defaultPage]);
        }
      });
    }, (error) => {
      //Toggle the error on sayonara
      console.log('page error!');
      this.sayonaraService.toggleSayonaraError();
    });
  }

  //Function to show a page from the site json
  getSayonaraPage(title: String, siteJson: any): any {
    //Reset our page
    this.pageLoaded = false;
    this.pageEntries = [];

    //Loop through the site Json
    let foundPage;
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
      this.pageEntries = this.sayonaraService.getOrderHack(entries);
  }

}
