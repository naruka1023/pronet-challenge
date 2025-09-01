import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { getList } from '../../store/list/list.actions';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.store.dispatch(getList({ page: 1, limit: 10 }));
  }
  goToLanding() {
    this.router.navigate([''], { relativeTo: this.activatedRoute.parent });
  }
}
