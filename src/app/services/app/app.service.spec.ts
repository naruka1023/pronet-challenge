import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';
import { Character, dummyCharacters } from '../../models/detail';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharacters should call the of ice and fire API', () => {
    const dummyResponse = [{ name: 'Jon Snow' }, { name: 'Arya Stark' }];
    const page = 2;
    const limit = 10;

    service.getCharacters(page, limit).subscribe((res) => {
      expect(res).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(
      `https://anapioficeandfire.com/api/characters?page=${page}&limit=${limit}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('getCharacterID should return the id of the character', () => {
    const character: Character = dummyCharacters[1];

    const id = service.getCharacterID(character);
    expect(id).toBe(270);
  });
});
