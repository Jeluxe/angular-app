import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-b-comp',
    templateUrl: './b-comp.component.html',
    styleUrls: ['./b-comp.component.css']
})
export class BCompComponent implements OnInit {
    route = null;
    flag = '';
    constructor(route: ActivatedRoute) {
        this.route = route;
        console.log(route.snapshot.params.name);
    }

    ngOnInit(): void {
        console.log(this.route);
        fetch(`https://restcountries.eu/rest/v2/name/${this.route.snapshot.params.name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0].flag);
                this.flag = data[0].flag;
            });
    }

}
