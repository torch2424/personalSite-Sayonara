/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteNavigatorService } from './route-navigator.service';

describe('RouteNavigatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteNavigatorService]
    });
  });

  it('should ...', inject([RouteNavigatorService], (service: RouteNavigatorService) => {
    expect(service).toBeTruthy();
  }));
});
