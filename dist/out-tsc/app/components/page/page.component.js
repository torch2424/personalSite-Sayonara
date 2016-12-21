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
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { SayonaraPublicService } from '../../services/sayonara-public.service';
var PageComponent = (function () {
    function PageComponent(router, route, sayonaraService) {
        this.router = router;
        this.route = route;
        this.sayonaraService = sayonaraService;
        this.pageLoaded = false;
        this.pageTitle = 'Home';
        this.pageEntries = [];
        this.defaultPage = 'Home';
        this.pageContent = '<h1>Loading Page...</h1>';
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
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
                    _this.router.navigate(['/page/' + _this.defaultPage]);
                }
            });
        }, function (error) {
            _this.sayonaraService.toggleSayonaraError();
        });
    };
    PageComponent.prototype.getSayonaraPage = function (title, siteJson) {
        var _this = this;
        this.pageLoaded = false;
        this.pageEntries = [];
        var foundPage;
        siteJson.pages.some(function (page) {
            if (page.title.toLowerCase() == title.toLowerCase()) {
                foundPage = page;
                setTimeout(function () {
                    _this.pageLoaded = true;
                }, 100);
                return true;
            }
            return false;
        });
        this.getSayonaraPageEntries(foundPage);
        return foundPage;
    };
    PageComponent.prototype.getSayonaraPageEntries = function (page) {
        var _this = this;
        if (page.entryTypes.length > 0) {
            page.entryTypes.forEach(function (entryType) {
                if (entryType.entries.length > 0) {
                    _this.pageEntries = _this.pageEntries.concat(entryType.entries);
                }
            });
        }
    };
    return PageComponent;
}());
PageComponent = __decorate([
    Component({
        selector: 'app-page',
        templateUrl: './page.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        SayonaraPublicService])
], PageComponent);
export { PageComponent };
//# sourceMappingURL=../../../../../src/app/components/page/page.component.js.map