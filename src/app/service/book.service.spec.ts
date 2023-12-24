/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LivroService } from './book.service';

describe('Service: Book', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivroService]
    });
  });

  it('should ...', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
