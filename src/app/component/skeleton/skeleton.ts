import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  imports: [],
  templateUrl: './skeleton.html',
  standalone: true,
  styleUrl: './skeleton.css',
  host: {
    class: 'd-block col-xl-3 col-lg-4 col-sm-6 col',
  },
})
export class Skeleton {}
