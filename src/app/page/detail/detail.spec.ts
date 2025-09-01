import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail } from './detail';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { selectItemByIndex } from '../../store/list/list.selectors';
import { dummyCharacters } from '../../models/detail';

describe('Detail', () => {
  let component: Detail;
  let fixture: ComponentFixture<Detail>;
  let store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => (key === 'id' ? '1' : null),
            }),
            snapshot: { paramMap: { get: (key: string) => (key === 'id' ? '1' : null) } },
          },
        },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectItemByIndex(1), dummyCharacters[0]);
    fixture = TestBed.createComponent(Detail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
