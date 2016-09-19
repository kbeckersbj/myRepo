"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Singleton_1 = require('../../../../singleton/Singleton');
var ExtentForm = (function () {
    function ExtentForm() {
        this.json = 'Not Ready';
        this.submitted = false;
        this.myMetadata = new Singleton_1.Singleton().myMetadata;
    }
    ExtentForm.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
        console.log(JSON.stringify(this.myMetadata));
        this.json = JSON.stringify(this.myMetadata);
    };
    ExtentForm = __decorate([
        core_1.Component({
            selector: 'extent-form',
            templateUrl: 'app/webfiles/metadataForm/tabs/Extent/extent-form.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ExtentForm);
    return ExtentForm;
}());
exports.ExtentForm = ExtentForm;
//# sourceMappingURL=extent-form.js.map