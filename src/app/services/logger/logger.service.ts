import { Injectable } from '@angular/core';

//Our environment
import { environment } from '../../../environments/environment';

@Injectable()
export class LoggerService {

  constructor() { }

  //Debug Logging
  public static debug(log: any, json?: any) {
    if(environment.production) return;
    if(json) {
      console.debug(log, json);
      return
    }
    console.debug(log);
  }

  //Error Logging
  public static error(log: any, json?: any) {
    //Showing errors on production
    //if(environment.production) return;
    if(json) {
      console.error(log, json);
      return
    }
    console.error(log);
  }

}
