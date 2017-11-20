"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var recipe_part_service_1 = require("./recipe-part.service");
describe('RecipePartService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [recipe_part_service_1.RecipePartService]
        });
    });
    it('should be created', testing_1.inject([recipe_part_service_1.RecipePartService], function (service) {
        expect(service).toBeTruthy();
    }));
});
