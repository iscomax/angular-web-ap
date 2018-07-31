import { TestBed, inject } from '@angular/core/testing';

import { DepartmentsDetailService } from './departments-detail.service';

describe('DepartmentsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentsDetailService]
    });
  });

  it('should be created', inject([DepartmentsDetailService], (service: DepartmentsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
