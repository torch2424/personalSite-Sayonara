import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our sayonara service
import { SayonaraPublicService } from '../sayonara-public.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pageTitle = 'Home';

  //Bind Html
  //http://stackoverflow.com/questions/31548311/angular-2-html-binding
  pageContent = '<h1>Loading Page...</h1>'

  constructor(
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
        self.pageContent = self.getSayonaraPage(currentPageTitle, success).content;
      });
    }, (error) => {
      //TODO: Handle this error
    });
  }

  //Function to show a page from the site json
  getSayonaraPage(title: String, siteJson: any): any {
    //Loop through the site Json
    let foundPage;
    siteJson.pages.some((page) => {
      if(page.title.toLowerCase() == title.toLowerCase()) {
        //Page found, return the page
        foundPage = page;
        return true;
      }
      //Page not found, keep going
      return false;
    });
    //Return the found page
    return foundPage;
  }

}
