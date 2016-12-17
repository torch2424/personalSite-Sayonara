/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SayonaraPublicService } from './sayonara-public.service';

describe('SayonaraPublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SayonaraPublicService]
    });
  });

  it('should ...', inject([SayonaraPublicService], (service: SayonaraPublicService) => {
    expect(service).toBeTruthy();
  }));
});
