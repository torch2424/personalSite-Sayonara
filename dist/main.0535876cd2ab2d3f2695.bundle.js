webpackJsonp([0,3],{257:function(e,t,n){"use strict";var a=n(0),o=n(40),r=n(159),i=n(2),s=(n.n(i),n(123)),c=(n.n(s),n(258));n.d(t,"a",function(){return l});var f=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=this&&this.__param||function(e,t){return function(n,a){t(n,a,e)}},l=function(){function e(e,t){this.http=e,this.document=t,this.sayonaraPublicPath="/api/public",this.sayonaraError=!1}return e.prototype.getSayonaraSite=function(){var e,t=this;return e=c.a.production?"//"+this.document.location.host+this.sayonaraPublicPath:"//"+this.document.location.hostname+":8000"+this.sayonaraPublicPath,new i.Observable(function(n){return t.sayonaraSiteJson?void n.next(t.sayonaraSiteJson):void t.http.get(e).map(function(e){return e.json()}).subscribe(function(e){t.sayonaraSiteJson=e,n.next(e)},function(e){n.error(e)},function(){})})},e.prototype.toggleSayonaraError=function(){this.sayonaraError=!this.sayonaraError},e.prototype.getSayonaraError=function(){return this.sayonaraError},e.prototype.sortByOrder=function(e){return e.sort(function(e,t){return e.order<t.order?-1:e.order>t.order?1:0}),e},e=f([n.i(a.R)(),d(1,n.i(a.y)(o.b)),u("design:paramtypes",["function"==typeof(t="undefined"!=typeof r.a&&r.a)&&t||Object,Object])],e);var t}()},258:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={production:!0,envName:"prod"}},427:function(e,t,n){"use strict";var a=n(0),o=n(257),r=n(429),i=n(428);n.d(t,"a",function(){return f});var s=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t){this.sayonaraService=e,this.routeNavigator=t,this.siteTitle="",this.navPages=[]}return e.prototype.ngOnInit=function(){var e=this;this.sayonaraService.getSayonaraSite().subscribe(function(t){i.a.debug("Sayonara API Success Response: ",t),e.siteTitle=t.siteName,e.getNavPages(t)},function(t){e.sayonaraService.toggleSayonaraError(),i.a.error("Sayonara API error: ",t)})},e.prototype.clickOutsideSideNav=function(e){e.opened&&e.toggle()},e.prototype.getNavPages=function(e){var t=[];e.pages.forEach(function(e){e.title&&t.push(e)}),this.navPages=this.sayonaraService.sortByOrder(t)},e=s([n.i(a.G)({selector:"app-root",template:n(799),providers:[o.a,r.a]}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object,"function"==typeof(f="undefined"!=typeof r.a&&r.a)&&f||Object])],e);var t,f}()},428:function(e,t,n){"use strict";var a=n(0),o=n(258);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e.debug=function(e,t){if(!o.a.production)return t?void console.debug(e,t):void console.debug(e)},e.error=function(e,t){return t?void console.error(e,t):void console.error(e)},e=r([n.i(a.R)(),i("design:paramtypes",[])],e)}()},429:function(e,t,n){"use strict";var a=n(0),o=n(253),r=n(470),i=(n.n(r),n(257));n.d(t,"a",function(){return f});var s=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t){var n=this;this.router=e,this.sayonaraService=t,this.currentPage="",this.sayonaraService.getSayonaraSite().subscribe(function(e){n.sayonaraPages=e.pages})}return e.prototype.goToDefaultPage=function(){var e=this.sayonaraPages[0].title;this.goToPage(e)},e.prototype.goToPage=function(e,t){this.router.navigate(["/page/"+e]),this.currentPage=e,t&&t.toggle()},e.prototype.isCurrentPage=function(e){return e==this.currentPage},e=s([n.i(a.R)(),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object,"function"==typeof(r="undefined"!=typeof i.a&&i.a)&&r||Object])],e);var t,r}()},482:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=482},483:function(e,t,n){"use strict";var a=n(646),o=(n.n(a),n(611)),r=n(0),i=n(258),s=n(644);i.a.production&&n.i(r._40)(),n.i(o.a)().bootstrapModule(s.a)},641:function(e,t,n){"use strict";var a=n(40),o=n(0),r=n(44),i=n(159),s=n(253),c=n(592),f=n(427),u=n(642),d=n(643),l=n(645);n.d(t,"a",function(){return y});var p=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=[{path:"page/:title",component:u.a},{path:"**",redirectTo:"page/notfound"}],y=function(){function e(){}return e=p([n.i(o.I)({declarations:[f.a,u.a,d.a,l.a],imports:[a.f,r.b,i.b,i.c,s.c.forRoot(h,{useHash:!0}),c.MaterialModule.forRoot()],exports:[s.c],providers:[],bootstrap:[f.a]}),g("design:paramtypes",[])],e)}()},642:function(e,t,n){"use strict";var a=n(0),o=n(253),r=n(470),i=(n.n(r),n(257)),s=n(429),c=n(428);n.d(t,"a",function(){return d});var f=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t,n){this.activatedRoute=e,this.sayonaraService=t,this.routeNavigator=n,this.pageLoaded=!1,this.pageTitle="Home",this.pageEntries=[],this.pageContent="<h1>Loading Page...</h1>"}return e.prototype.ngOnInit=function(){var e=this;this.sayonaraService.getSayonaraSite().subscribe(function(t){e.activatedRoute.params.subscribe(function(n){var a=n.title;e.pageTitle=a;var o=e.getSayonaraPage(a,t);o&&o.content?e.pageContent=o.content:e.routeNavigator.goToDefaultPage()})},function(t){c.a.error("page error!"),e.sayonaraService.toggleSayonaraError()})},e.prototype.getSayonaraPage=function(e,t){var n=this;this.pageLoaded=!1,this.pageEntries=[];var a=!1;return t.pages.some(function(t){return t.title.toLowerCase()==e.toLowerCase()&&(a=t,setTimeout(function(){n.pageLoaded=!0},100),!0)}),a?(this.getSayonaraPageEntries(a),a):void this.routeNavigator.goToDefaultPage()},e.prototype.getSayonaraPageEntries=function(e){var t=[];e.entryTypes.length>0&&e.entryTypes.forEach(function(e){e.entries.length>0&&(t=t.concat(e.entries))}),this.pageEntries=this.sayonaraService.sortByOrder(t)},e=f([n.i(a.G)({selector:"app-page",template:n(800)}),u("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.b&&o.b)&&t||Object,"function"==typeof(r="undefined"!=typeof i.a&&i.a)&&r||Object,"function"==typeof(d="undefined"!=typeof s.a&&s.a)&&d||Object])],e);var t,r,d}()},643:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e.prototype.ngOnInit=function(){},e=o([n.i(a.G)({selector:"sayonara-error",template:n(801)}),r("design:paramtypes",[])],e)}()},644:function(e,t,n){"use strict";var a=(n(427),n(641));n.d(t,"a",function(){return a.a})},645:function(e,t,n){"use strict";var a=n(0),o=n(40);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,a){var o,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.sanitized=e}return e.prototype.transform=function(e){return this.sanitized.bypassSecurityTrustHtml(e)},e=r([n.i(a.J)({name:"safeHtml"}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.e&&o.e)&&t||Object])],e);var t}()},646:function(e,t,n){"use strict";var a=n(660),o=(n.n(a),n(653)),r=(n.n(o),n(649)),i=(n.n(r),n(655)),s=(n.n(i),n(654)),c=(n.n(s),n(652)),f=(n.n(c),n(651)),u=(n.n(f),n(659)),d=(n.n(u),n(648)),l=(n.n(d),n(647)),p=(n.n(l),n(657)),g=(n.n(p),n(650)),h=(n.n(g),n(658)),y=(n.n(h),n(656)),v=(n.n(y),n(661)),m=(n.n(v),n(832));n.n(m)},799:function(e,t){e.exports='<!-- Place our header / nav, only show if now error -->\n<!-- https://github.com/jelbourn/material2-app/blob/master/src/app/app.component.html -->\n<md-sidenav-layout class="nav">\n\n  <!-- Mobile Nav Bar -->\n  <md-sidenav #sidenav mode="side" class="nav__sidenav">\n\n    <!-- title of the sidenav -->\n    <h2 class="center-text animated fadeIn">Navigation</h2>\n\n    <!-- List all of our page titles -->\n    <div class="nav__sidenav__page-link animated fadeInLeft"\n        [hidden]="sayonaraService.getSayonaraError()"\n        *ngFor="let page of navPages; let pageIndex = index;"\n        [ngClass]="{\'nav__sidenav__page-link--active-page\': routeNavigator.isCurrentPage(pageTitle)}"\n        (click)="routeNavigator.goToPage(page.title, sidenav)">\n        <hr>\n        <div class="nav__sidenav__page-link__text">{{page.title}}</div>\n    </div>\n\n    <!-- Close Link -->\n    <div class="nav__sidenav__page-link animated fadeInLeft"\n        (click)="sidenav.toggle()">\n        <hr>\n        <div class="nav__sidenav__page-link__text">Close</div>\n        <hr>\n    </div>\n  </md-sidenav>\n\n  <!-- Desktop Nav Bar -->\n  <md-toolbar color="primary">\n    <button class="nav__icon-button" [hidden]="sayonaraError" (click)="sidenav.toggle()">\n      <i class="material-icons app-toolbar-menu">menu</i>\n    </button>\n\n    <div class="nav__title">\n        {{siteTitle}}\n    </div>\n\n    <!-- List all of our page titles -->\n    <div class="nav__page-link"\n        [hidden]="sayonaraService.getSayonaraError()"\n        *ngFor="let page of navPages"\n        [ngClass]="{\'nav__page-link--active-page\': routeNavigator.isCurrentPage(page.title)}"\n        (click)="routeNavigator.goToPage(page.title)">\n        {{page.title}}\n    </div>\n\n    <span class="app-toolbar-filler"></span>\n  </md-toolbar>\n\n  <!-- Overlay to show when sidenav opened -->\n  <div class="nav__overlay"\n      [ngClass]="{\'nav__overlay--show\': sidenav.opened}"\n      (click)="clickOutsideSideNav(sidenav)">\n  </div>\n\n<!-- Main Application -->\n<div class="c-app" [hidden]="sayonaraService.getSayonaraError()">\n\n    <router-outlet></router-outlet>\n    <!-- Routed views go here -->\n\n    <!-- Place our footer -->\n\n</div>\n\n<!-- Our view if there is a sayonara error -->\n<div class="c-app--error" [hidden]="!sayonaraService.getSayonaraError()">\n    <!-- Show the Error Component -->\n    <sayonara-error></sayonara-error>\n</div>\n\n</md-sidenav-layout>\n'},800:function(e,t){e.exports='<!-- Wrap in Ng-show for animation on page change -->\n<div class="c-page animated fadeIn" [hidden]="!pageLoaded">\n    <!-- Page Title -->\n    <h1 class="center-text">{{pageTitle}}</h1>\n\n    <!-- display the page content in a card if no entryTypes -->\n    <md-card class="center" *ngIf="pageEntries.length < 1">\n        <!-- Page Content -->\n        <!-- TODO: Need a filter to not remove style tags: http://stackoverflow.com/questions/39628007/angular2-innerhtml-binding-remove-style-attribute -->\n        <div [innerHTML]="pageContent | safeHtml">\n        </div>\n    </md-card>\n\n    <!-- Display the page content, and a flex box of cards of the pages -->\n    <div class="center" *ngIf="pageEntries.length >= 1">\n        <!-- Page Content -->\n        <!-- Need a filter to not remove style tags: http://stackoverflow.com/questions/39628007/angular2-innerhtml-binding-remove-style-attribute -->\n        <div class="center-text" [innerHTML]="pageContent | safeHtml">\n        </div>\n\n        <div class="c-page__entry-container">\n            <!-- Repeat through all of our entries -->\n            <md-card class="c-page__entry-container__entry" *ngFor="let entry of pageEntries">\n                <!-- Entry Content -->\n                <!-- TODO: Need a filter to not remove style tags: http://stackoverflow.com/questions/39628007/angular2-innerhtml-binding-remove-style-attribute -->\n                <div [innerHTML]="entry.content | safeHtml">\n                </div>\n            </md-card>\n        </div>\n    </div>\n</div>\n'},801:function(e,t){e.exports='<h1 class="center-text">Uh Oh!</h1>\n\n<div class="center-text">\n    Seems like Something went wrong with getting the website content from the <a href="http://sayonarajs.com" target="_blank">Sayonara</a> API. This is kinda lame. I am sorry about that. I bet I am out right now having a great time, and you\'re just trying to browse the web, or do your job, and this website is down. Dude. My bad. I guess that is what I get for building my own CMS/Framework thingy, and rebuilding my own website on top of it when it is still in Alpha. I thought it would be cool though! Well, I guess it is cool when it works. Want to hear a joke in the meantime? ["hip","hip"] (Hip hip array!). Ha! You get it? It\'s an array of two "hip"\'s. I thought it was funny. I found it on Reddit. Anyways, back to the matter at hand. If you\'re still with me, perhaps it was your internet connection that failed to make the reqyest to the sayonara page?\n\n    You can try and <a href="">reload the page</a> if you are up to it! Anyways, I hope to hear from you soon! And if you would be so kind, you can e-mail me at: <a href="mailto:aaron@aaronthedev.com">aaron@aaronthedev.com</a>, to let me know my website is acting up. Thank you! And, Good luck!\n</div>\n'},833:function(e,t,n){e.exports=n(483)}},[833]);
//# sourceMappingURL=main.0535876cd2ab2d3f2695.bundle.map