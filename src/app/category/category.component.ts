import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  route = null;
  constructor(route: ActivatedRoute) {
    this.route = route
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.category);
    fetch(`http://localhost:4000/games/${this.route.snapshot.params.category}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

}
