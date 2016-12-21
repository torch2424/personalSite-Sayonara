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
  title = 'app works!';

  //The Website Title
  siteTitle = '';

  //The title attribute of the sayonara site that leads home
  private homePageTitleKey = 'home';

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

      //Navigate to the home page
      this.router.navigate(['/page/' + self.homePageTitleKey]);
    }, (error) => {
      //TODO: handle the error
      console.log("Sayonara error: ", error);
    });
  }
}
