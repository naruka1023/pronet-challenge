import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getList } from '../../store/list/list.actions';
import { List } from '../../page/list/list';
import { Favorite } from '../../page/favorite/favorite';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('Dashboard', () => {
  let fixture: ComponentFixture<Dashboard>;
  let component: Dashboard;
  let location: Location;
  let router: Router;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        provideMockStore(),
        provideRouter([
          { path: 'list', component: List },
          { path: 'favorite', component: Favorite },
        ]),
      ],
    }).compileComponents();

    location = TestBed.inject(Location);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create the layout component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to List page when clicking List link', async () => {
    const listLink = fixture.debugElement.query(By.css('a.listLink'));
    listLink.nativeElement.click();
    await fixture.whenStable();
    expect(location.path()).toBe('/list');
  });

  it('should navigate to Favorites page when clicking Favorites link', async () => {
    const favLink = fixture.debugElement.query(By.css('a.favoriteLink'));
    favLink.nativeElement.click();
    await fixture.whenStable();
    expect(location.path()).toBe('/favorite');
  });

  it('should navigate to Landing page when clicking Landing link', async () => {
    const favLink = fixture.debugElement.query(By.css('a.landingLink'));
    favLink.nativeElement.click();
    await fixture.whenStable();
    expect(location.path()).toBe('');
  });

  it('Dashboard should call getList on init', () => {
    const dashboardFixture = TestBed.createComponent(Dashboard);
    const dashboard = dashboardFixture.componentInstance;
    const spy = spyOn(store, 'dispatch');

    dashboard.ngOnInit();
    expect(spy).toHaveBeenCalledWith(getList({ page: 1, limit: 10 }));
  });
});
