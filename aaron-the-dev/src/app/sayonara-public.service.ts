import { Injectable } from '@angular/core';

//Make Http requests
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class SayonaraPublicService {

  private sayonaraUrl = 'api/public';  // URL to web API

  constructor(private http: Http) { }

  getSayonaraSite() {
    console.log('Getting the site!');
  }

}
