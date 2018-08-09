import { TestBed, inject } from '@angular/core/testing';

import{ HttpClientTestingModule } from '@angular/common/http/testing';


import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([DepartmentsService], (service: DepartmentsService) => {
    expect(service).toBeTruthy();
  }));
});
