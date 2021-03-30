import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.css']
})

export class ListOfCardsComponent implements OnInit {

  pokemons = [
    {
      name: 'bulbasaur',
      id: 1,
      damage: 5,
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 7,
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 9,
    },
    {
      name: 'charmander',
      id: 4,
      damage: 6,
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 8,
    },
    {
      name: 'charizard',
      id: 6,
      damage: 10,
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 4,
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 7,
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 9,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
