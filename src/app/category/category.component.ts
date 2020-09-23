import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  route = null;
  router = null;
  games = [];

  constructor(router: Router, route: ActivatedRoute) {
    this.route = route
    this.router = router
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.category);
    fetch(`/api/games/${this.route.snapshot.params.category}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.games = data;
      });
  }

  onClickMe(id) {
    console.log(id)
    this.router.navigate([`/${this.route.snapshot.params.category}`, `${id}`])
  }
}
