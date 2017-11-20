"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var nutrient_info_service_1 = require("./nutrient-info.service");
describe('NutrientInfoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [nutrient_info_service_1.NutrientInfoService]
        });
    });
    it('should be created', testing_1.inject([nutrient_info_service_1.NutrientInfoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
