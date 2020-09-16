import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-a-comp',
    templateUrl: './a-comp.component.html',
    styleUrls: ['./a-comp.component.css']
})
export class ACompComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {
        this.router = router;
    }

    ngOnInit(): void {
    }

    goToPage() {
        this.router.navigate(['/b', 'zvi']);
    }

}
