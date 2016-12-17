import { Component, OnInit } from '@angular/core';

//Import our sayonara service
import { SayonaraPublicService } from './sayonara-public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SayonaraPublicService]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private sayonaraService: SayonaraPublicService) { }

  ngOnInit() {
    //Make the request
    console.log('Inited!');
    this.sayonaraService.getSayonaraSite();
  }
}
