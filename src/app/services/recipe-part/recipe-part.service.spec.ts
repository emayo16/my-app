import { TestBed, inject } from '@angular/core/testing';

import { RecipePartService } from './recipe-part.service';

describe('RecipePartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipePartService]
    });
  });

  it('should be created', inject([RecipePartService], (service: RecipePartService) => {
    expect(service).toBeTruthy();
  }));
});
