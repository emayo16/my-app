"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ingredient_service_1 = require("./ingredient.service");
describe('IngredientService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [ingredient_service_1.IngredientService]
        });
    });
    it('should be created', testing_1.inject([ingredient_service_1.IngredientService], function (service) {
        expect(service).toBeTruthy();
    }));
});
