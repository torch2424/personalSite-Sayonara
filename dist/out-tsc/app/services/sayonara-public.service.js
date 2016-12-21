var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
var SayonaraPublicService = (function () {
    function SayonaraPublicService(http, document) {
        this.http = http;
        this.document = document;
        this.sayonaraPublicPath = '/api/public';
        this.sayonaraError = false;
    }
    SayonaraPublicService.prototype.getSayonaraSite = function () {
        var sayonaraUrl = '//' + this.document.location.hostname + ':8000' + this.sayonaraPublicPath;
        var self = this;
        return new Observable(function (observer) {
            if (self.sayonaraSiteJson) {
                observer.next(self.sayonaraSiteJson);
                return;
            }
            self.http.get(sayonaraUrl)
                .map(function (res) { return res.json(); })
                .subscribe(function (success) {
                self.sayonaraSiteJson = success;
                observer.next(success);
            }, function (error) {
                observer.error(error);
            }, function () {
            });
        });
    };
    SayonaraPublicService.prototype.toggleSayonaraError = function () {
        this.sayonaraError = !this.sayonaraError;
    };
    SayonaraPublicService.prototype.getSayonaraError = function () {
        return this.sayonaraError;
    };
    return SayonaraPublicService;
}());
SayonaraPublicService = __decorate([
    Injectable(),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Http, Object])
], SayonaraPublicService);
export { SayonaraPublicService };
//# sourceMappingURL=../../../../src/app/services/sayonara-public.service.js.map