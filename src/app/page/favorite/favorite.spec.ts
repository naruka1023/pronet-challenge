import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Character, dummyCharacters } from '../../models/detail';
import { selectFavorites } from '../../store/list/list.selectors';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Favorite } from './favorite';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CharacterComponent } from '../../component/character/character';

describe('Favorite Component', () => {
  let fixture: ComponentFixture<Favorite>;
  let component: Favorite;
  let store: MockStore;

  const mockFavorites: Character[] = dummyCharacters;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Favorite],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Favorite);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set emptyFlag to true when favorites are empty', () => {
    store.overrideSelector(selectFavorites, []);
    fixture.detectChanges();
    expect(component.emptyFlag).toBeTrue();
    const emptyFavorite = fixture.debugElement.query(By.css('div.emptyFavorite'));
    expect(emptyFavorite.nativeElement.textContent).toContain('No Favorites Selected');
  });

  it('should set emptyFlag to false when favorites exist', () => {
    store.overrideSelector(selectFavorites, mockFavorites);
    fixture.detectChanges();
    expect(component.emptyFlag).toBeFalse();

    const characterElements = fixture.debugElement.queryAll(By.css('app-character'));
    expect(characterElements.length).toBe(mockFavorites.length);
  });
});
