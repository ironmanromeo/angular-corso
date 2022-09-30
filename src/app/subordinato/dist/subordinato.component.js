"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubordinatoComponent = void 0;
var core_1 = require("@angular/core");
var SubordinatoComponent = /** @class */ (function () {
    function SubordinatoComponent() {
        this.testo = "";
        console.log("Constructor", this.testo);
    }
    SubordinatoComponent.prototype.ngOnChanges = function (changes) {
        console.log("onOnChanges", changes);
    };
    SubordinatoComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit", this.testo);
    };
    SubordinatoComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy", this.testo);
    };
    SubordinatoComponent.prototype.checkTesto = function () {
        return this.testo === "Pippo";
    };
    __decorate([
        core_1.Input()
    ], SubordinatoComponent.prototype, "testo");
    SubordinatoComponent = __decorate([
        core_1.Component({
            selector: 'app-subordinato',
            templateUrl: './subordinato.component.html',
            styleUrls: ['./subordinato.component.css']
        })
    ], SubordinatoComponent);
    return SubordinatoComponent;
}());
exports.SubordinatoComponent = SubordinatoComponent;
