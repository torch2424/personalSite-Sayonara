import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

//Import our sayonara service
import { SayonaraPublicService } from '../sayonara-public/sayonara-public.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class RouteNavigatorService {

  //Our pages Array
  private sayonaraPages: any;
  //Our current page
  private currentPage = '';

  constructor(
    private router: Router,
    private sayonaraService: SayonaraPublicService
  ) {
    this.sayonaraService.getSayonaraSite().subscribe((success: any) => {
      this.sayonaraPages = success.pages;
    })
  }

  //Function to go to the default page
  goToDefaultPage() {
    //Get the default page (zero index)
    let defaultPageTitle = this.sayonaraPages[0].title
    this.goToPage(defaultPageTitle);
  }

  //Function to go to a page from the sidenav
  goToPage(title: string, sidenav?: any) {
      //Go to the route
      this.router.navigate(['/page/' + title]);
      this.currentPage = title;
      //Toggle the sidenav
      if(sidenav) sidenav.toggle();
  }

  //Function to return if the current title refers to the current page
  isCurrentPage(title: string) {
      return title == this.currentPage;
  }

}
