import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';


@Component({
    selector: 'app-character',
    template: `
    <div class="card">
      <div class="image">
        <a [routerLink]="['/character-details', character.id]">
          <img
            [src]="character.image"
            [alt]="character.name"
            class="card-img-top"
          />
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
          <h2>{{ character.name | slice: 0:15}}</h2>
          <h4 class="text-muted">Gender: {{ character.gender }}</h4>
          <small class="text-muted">Created on: {{ character.created | date }}</small>
          <br>
          <small class="text-muted">Status: {{ character.status }}</small>
          <br>
          <small class="text-muted">Specie: {{ character.species }}</small>
        </div>
      </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterComponent {
    @Input()
    character: Character;
}