import { TestBed, inject } from '@angular/core/testing';

import { NutrientInfoService } from './nutrient-info.service';

describe('NutrientInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutrientInfoService]
    });
  });

  it('should be created', inject([NutrientInfoService], (service: NutrientInfoService) => {
    expect(service).toBeTruthy();
  }));
});
