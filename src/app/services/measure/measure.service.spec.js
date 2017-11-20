"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var measure_service_1 = require("./measure.service");
describe('MeasureService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [measure_service_1.MeasureService]
        });
    });
    it('should be created', testing_1.inject([measure_service_1.MeasureService], function (service) {
        expect(service).toBeTruthy();
    }));
});
