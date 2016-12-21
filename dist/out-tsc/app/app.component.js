var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SayonaraPublicService } from './services/sayonara-public.service';
var AppComponent = (function () {
    function AppComponent(router, sayonaraService) {
        this.router = router;
        this.sayonaraService = sayonaraService;
        this.siteTitle = '';
        this.navPages = [];
        this.homePageTitleKey = 'home';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            console.log("Sayonara Success: ", success);
            _this.siteTitle = success.siteName;
            _this.getNavPages(success);
            _this.router.navigate(['/page/' + self.homePageTitleKey]);
        }, function (error) {
            console.log("Sayonara error: ", error);
        });
    };
    AppComponent.prototype.clickOutsideSideNav = function (sidenav) {
        if (sidenav.opened)
            sidenav.toggle();
    };
    AppComponent.prototype.goToPage = function (title, sidenav) {
        this.router.navigate(['/page/' + title]);
        sidenav.toggle();
    };
    AppComponent.prototype.getNavPages = function (siteJson) {
        var self = this;
        siteJson.pages.forEach(function (page) {
            if (page.title)
                self.navPages.push(page.title);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        providers: [SayonaraPublicService]
    }),
    __metadata("design:paramtypes", [Router,
        SayonaraPublicService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map