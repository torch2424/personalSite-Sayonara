import { Injectable, Inject } from '@angular/core';

//Get the browser docuemtn for location
import { DOCUMENT } from '@angular/platform-browser'

//Make Http requests
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SayonaraPublicService {

  private sayonaraPublicPath = '/api/public';  // URL to web API

  private sayonaraSiteJson: any;

  private sayonaraError = false;

  constructor(
    private http: Http,
    @Inject(DOCUMENT) private document: any
  ) { }

  //Get the site, and allow passing a callback
  getSayonaraSite() {
    //Get the full Url, dont use port 8000 for production
    let sayonaraUrl = '//' + this.document.location.hostname + ':8000' + this.sayonaraPublicPath;

    //Get a reference to this
    let self = this;

    //Return an observable
    return new Observable((observer) => {

      //Check if we already have the json
      if(self.sayonaraSiteJson) {
        observer.next(self.sayonaraSiteJson);
        return;
      }

      //If not request it
      self.http.get(sayonaraUrl)
        .map(res => res.json())
        .subscribe((success) => {
          //Success!
          //Save/cache our site json
          self.sayonaraSiteJson = success;

          //return to our observer
          observer.next(success);
        }, (error) => {
          //Error!
          observer.error(error);
        }, () => {
          //Completed
        });
    });
  }

  //Function to toggle the sayonara Error
  toggleSayonaraError() {
      this.sayonaraError = !this.sayonaraError;
  }

  //Function to return the sayonara error
  getSayonaraError() {
      return this.sayonaraError;
  }

  //Function to sort sayonara arrays by the object order attribute
  sortByOrder(sayonaraArray) {
    //Next, sort by the order
    sayonaraArray.sort((alice: any, bob: any) => {
      if (alice['order'] < bob['order'] ) {
        return -1;
      } else if (alice['order']  > bob['order'] ) {
        return 1;
      } else {
        return 0;
      }
    });

    //Return the sorted array by order
    return sayonaraArray;
  }
}
