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
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SayonaraPublicService } from '../../services/sayonara-public.service';
var PageComponent = (function () {
    function PageComponent(route, sayonaraService) {
        this.route = route;
        this.sayonaraService = sayonaraService;
        this.pageTitle = 'Home';
        this.pageContent = '<h1>Loading Page...</h1>';
    }
    PageComponent.prototype.ngOnInit = function () {
        var self = this;
        this.sayonaraService.getSayonaraSite().subscribe(function (success) {
            self.route.params.subscribe(function (params) {
                var currentPageTitle = params['title'];
                self.pageTitle = currentPageTitle;
                var sayonaraPage = self.getSayonaraPage(currentPageTitle, success);
                if (sayonaraPage.content) {
                    self.pageContent = sayonaraPage.content;
                }
                else {
                }
            });
        }, function (error) {
        });
    };
    PageComponent.prototype.getSayonaraPage = function (title, siteJson) {
        var foundPage;
        console.log("Title: ", title, "json: ", siteJson);
        siteJson.pages.some(function (page) {
            if (page.title.toLowerCase() == title.toLowerCase()) {
                foundPage = page;
                return true;
            }
            return false;
        });
        return foundPage;
    };
    return PageComponent;
}());
PageComponent = __decorate([
    Component({
        selector: 'app-page',
        templateUrl: './page.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        SayonaraPublicService])
], PageComponent);
export { PageComponent };
//# sourceMappingURL=../../../../../src/app/components/page/page.component.js.map