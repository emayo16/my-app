"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var RecipePartService = /** @class */ (function () {
    function RecipePartService(http) {
        this.http = http;
    }
    RecipePartService.prototype.getRecipeParts = function () {
        return Promise.resolve(this.http.get('/api/RecipePart')
            .map(function (res) { return res.json(); }));
    };
    RecipePartService = __decorate([
        core_1.Injectable()
    ], RecipePartService);
    return RecipePartService;
}());
exports.RecipePartService = RecipePartService;
