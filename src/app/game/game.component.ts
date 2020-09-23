import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // @Input update;
  route = null;
  gameDetails = [];

  constructor(route: ActivatedRoute) {
    this.route = route
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    const { category, gameID } = this.route.snapshot.params;
    fetch(`/api/${category}/${gameID}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.gameDetails = data;
      });
  }
}
