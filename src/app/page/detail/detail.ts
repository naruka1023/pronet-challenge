import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItemByIndex } from '../../store/list/list.selectors';
import { Character } from '../../models/detail';
import { EmptyPipe } from '../../pipe/empty-pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, EmptyPipe, AsyncPipe],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail implements OnInit {
  private store = inject(Store);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  character$!: Observable<Character>;
  constructor() {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.character$ = this.store.select(selectItemByIndex(Number(params.get('id'))));
    });
  }
  back() {
    this.route.navigate(['dashboard']);
  }
}
