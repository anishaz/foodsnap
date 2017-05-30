import { TestBed, inject } from '@angular/core/testing';

import { ImageGridService } from './image-grid.service';

describe('ImageGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageGridService]
    });
  });

  it('should be created', inject([ImageGridService], (service: ImageGridService) => {
    expect(service).toBeTruthy();
  }));
});
