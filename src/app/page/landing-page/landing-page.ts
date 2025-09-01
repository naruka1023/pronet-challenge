import { Component, inject } from '@angular/core';
import { CharacterComponent } from '../../component/character/character';
import { Character, dummyCharacters } from '../../models/detail';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  imports: [CharacterComponent, RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  get characters(): Character[] {
    return dummyCharacters;
  }
}
