import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppService } from '../../services/app/app.service';
import { createFavorite, deleteFavorite } from '../../store/list/list.actions';
import { Character, dummyCharacters } from '../../models/detail';
import { CharacterComponent } from './character';
import { favoriteFlag } from '../../store/list/list.selectors';
import { initialState } from '../../store/list/list.reducers';

describe('CharacterComponent', () => {
  let fixture: ComponentFixture<CharacterComponent>;
  let component: CharacterComponent;
  let store: MockStore;
  let router: Router;
  let appService: jasmine.SpyObj<AppService>;
  let id = 1;

  beforeEach(async () => {
    appService = jasmine.createSpyObj('AppService', ['getCharacterID']);
    appService.getCharacterID.and.returnValue(id);

    await TestBed.configureTestingModule({
      imports: [CharacterComponent],
      providers: [
        provideMockStore({
          initialState: { list: initialState }, // 👈 ensures favorite is at least {}
        }),
        { provide: AppService, useValue: appService },
        provideRouter([]),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture.componentRef.setInput('item', dummyCharacters[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('goToDetail should call router.navigate with detail/:id', () => {
    spyOn(router, 'navigate');
    component.id = 42;
    component.goToDetail();
    expect(router.navigate).toHaveBeenCalledWith(['detail', 42], {
      relativeTo: component.activatedRoute.parent,
    });
  });

  it('toggleFavorite should dispatch deleteFavorite if favorite is true', () => {
    spyOn(store, 'dispatch');
    component.favorite = true;
    component.id = 1;
    component.toggleFavorite();
    expect(store.dispatch).toHaveBeenCalledWith(deleteFavorite({ index: 1 }));
  });

  it('toggleFavorite should dispatch createFavorite when favorite is false', () => {
    spyOn(store, 'dispatch');
    component.favorite = false;
    component.id = 1;
    component.toggleFavorite();
    expect(store.dispatch).toHaveBeenCalledWith(createFavorite({ index: 1 }));
  });
});
