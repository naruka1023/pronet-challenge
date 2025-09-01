import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Character, dummyCharacters } from '../../models/detail';
import { scrollEvent } from '../../store/list/list.actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { List } from './list';
import { selectList } from '../../store/list/list.selectors';
import { MemoizedSelector, DefaultProjectorFn } from '@ngrx/store';

describe('List Component', () => {
  let fixture: ComponentFixture<List>;
  let component: List;
  let store: MockStore;
  let mockSelectList: MemoizedSelector<any, Character[], DefaultProjectorFn<Character[]>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List, FormsModule, ReactiveFormsModule],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(List);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    mockSelectList = store.overrideSelector(selectList, []);

    store.overrideSelector('selectList', dummyCharacters);
    store.overrideSelector('selectLoading', false);
    store.overrideSelector('selectError', null);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set emptyFlag to true when list is empty', fakeAsync(() => {
    store.overrideSelector('selectList', []);
    component.ngOnInit();
    tick();
    expect(component.emptyFlag).toBeTrue();
  }));
});
